import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array';

export function reduce<T>([callback, initialValue, array]: [(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, T, T[]]) {
  if (isEmpty(callback)) {
    return [];
  }

  return asArray(array).reduce(callback, initialValue);
}

export default helper(reduce);
