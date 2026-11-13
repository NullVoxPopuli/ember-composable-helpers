import { helper } from '@ember/component/helper';
import isPromise from '../utils/is-promise.ts';

export function invokeFunction<T>(acc: T, curr: (...args: unknown[]) => void) {
  if (isPromise(acc)) {
    return acc.then(curr);
  }

  return curr(acc);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PipeFn = (...args: any[]) => unknown;

/**
 * Creates a function that runs each action in order, passing the result of
 * one action as the argument of the next. The first action receives the
 * arguments the returned function is called with. If an action returns a
 * promise, the next action is called with the resolved value.
 *
 * The returned function accepts and returns `any`: the arguments depend on the
 * first action and the result on the last, which can't be known statically.
 * This lets it be used anywhere a function is expected, e.g. as an event
 * handler.
 *
 * @example
 * ```hbs
 * <button {{on "click" (pipe this.save this.close)}}>Save</button>
 * ```
 *
 * @example
 * ```ts
 * const handler = pipe([(n: number) => n + 1, (n: number) => String(n)]);
 * handler(1); // '2'
 * ```
 */
export function pipe(actions: PipeFn[] = []) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (...args: any[]): any {
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    return actions.reduce<unknown | Promise<unknown>>((acc, curr, idx) => {
      if (idx === 0) {
        return curr(...args);
      }

      return invokeFunction(acc, curr);
    }, undefined);
  };
}

export default helper(
  pipe as (
    actions: unknown[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => (...args: any[]) => any,
);
