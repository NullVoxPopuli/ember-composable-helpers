import { helper } from '@ember/component/helper';
import { A as emberArray, isArray as isEmberArray } from '@ember/array';

function contains<T>(needle: T, haystack: T[]) {
  return emberArray(haystack).includes(needle);
}

export function without<T>(needle: T, haystack: T[]) {
  if (!isEmberArray(haystack)) {
    return false;
  }

  if (isEmberArray(needle) && needle.length) {
    return haystack.reduce<T[]>((acc, val) => {
      return contains(val, needle as T[]) ? acc : acc.concat(val);
    }, []);
  }

  return emberArray(haystack).without(needle);
}

export default helper(function<T>([needle, haystack]: [T | T[], T[]]) {
  return without(needle, haystack);
});
