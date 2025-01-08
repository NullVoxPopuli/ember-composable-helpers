import { isArray as isEmberArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';
import type { AnyVoidFn } from '../utils/types';

const { all } = RSVP;

/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Invokes a method on an object, or on each object of an array
 */
export function invoke<K extends PropertyKey, T extends Record<K, AnyVoidFn>>([methodName, ...args]: [K, T, ...unknown[]]) {
  let obj = args.pop() as T | T[];

  if (isEmberArray(obj)) {
    return function() {
      let promises = obj.map((item) => item[methodName]?.(...args));

      return all(promises);
    };
  }

  return function() {
    return obj[methodName]?.(...args);
  };
}

export default helper(invoke);
