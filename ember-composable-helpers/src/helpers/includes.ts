import { A as emberArray } from '@ember/array';
import { isArray as isEmberArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array';

export function includes<T>(needleOrNeedles: T | T[], haystack: T[]) {
  if (!isEmberArray(haystack)) {
    return false;
  }

  let needles = isEmberArray(needleOrNeedles) ? needleOrNeedles : [needleOrNeedles];
  let haystackAsEmberArray = emberArray(asArray(haystack));

  return asArray(needles).every((needle) => {
    return haystackAsEmberArray.includes(needle);
  });
}

export default helper(function<T>([needle, haystack]: [T | T[], T[]]) {
  return includes(needle, haystack);
});
