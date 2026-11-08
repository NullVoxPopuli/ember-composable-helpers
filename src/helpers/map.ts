import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.ts';

export function map<T>([callback, array]: [
  (value: T, index: number, array: T[]) => T,
  T[],
]) {
  if (isEmpty(callback)) {
    return [];
  }

  return asArray(array).map(callback);
}

export default helper(map);
