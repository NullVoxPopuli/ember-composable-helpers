import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.ts';

export function filter<T>([callback, array]: [
  (value: T, index: number, array: T[]) => value is T,
  T[],
]) {
  if (isEmpty(callback) || !array) {
    return [];
  }

  return asArray(array).filter(callback);
}

export default helper(filter);
