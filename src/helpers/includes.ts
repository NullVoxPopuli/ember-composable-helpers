import { isArray as isEmberArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.ts';

export function includes<T>(needleOrNeedles: T | T[], haystack: T[]) {
  if (!isEmberArray(haystack)) {
    return false;
  }

  const needles = isEmberArray(needleOrNeedles)
    ? needleOrNeedles
    : [needleOrNeedles];
  const haystackAsEmberArray = asArray(haystack);

  return asArray(needles as T[]).every((needle) => {
    return haystackAsEmberArray.includes(needle);
  });
}

export default helper(function <T>([needle, haystack]: [T | T[], T[]]) {
  return includes(needle, haystack);
});
