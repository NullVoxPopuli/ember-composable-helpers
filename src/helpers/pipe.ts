import { helper } from '@ember/component/helper';
import isPromise from '../utils/is-promise.ts';

export function invokeFunction<T>(acc: T, curr: (...args: unknown[]) => void) {
  if (isPromise(acc)) {
    return acc.then(curr);
  }

  return curr(acc as T);
}

export function pipe(actions: [...((...args1: unknown[]) => unknown)[]] = []) {
  return function (...args: [...unknown[]]) {
    return actions.reduce<unknown | Promise<unknown>>((acc, curr, idx) => {
      if (idx === 0) {
        return curr(...args);
      }

      return invokeFunction(acc, curr);
    }, undefined);
  };
}

export default helper(pipe as (actions: unknown[]) => unknown);
