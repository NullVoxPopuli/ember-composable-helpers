import { isArray as isEmberArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';

const { all } = RSVP;

export function invoke<K extends PropertyKey, T extends Record<K, (...args: any[]) => void>>([methodName, ...args]: [K, T, ...unknown[]]) {
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
