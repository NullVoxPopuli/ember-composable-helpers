import { helper } from '@ember/component/helper';
import isPromise from '../utils/is-promise.ts';

function invokeMaybeNullable(
  curr: (...args1: unknown[]) => void | null,
  args: unknown[],
) {
  return curr == null ? undefined : curr(...args);
}

export function queue(positional: unknown[] = []) {
  const actions = positional as (() => void)[];

  return function (...args: unknown[]) {
    const invokeWithArgs = function (acc: unknown, curr: () => void) {
      if (isPromise(acc)) {
        return acc.then(() => invokeMaybeNullable(curr, args));
      }

      return invokeMaybeNullable(curr, args);
    };

    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    return actions.reduce<unknown | Promise<unknown>>((acc, curr, idx) => {
      if (idx === 0) {
        return invokeMaybeNullable(curr, args);
      }

      return invokeWithArgs(acc, curr);
    }, undefined);
  };
}

export default helper(queue);
