import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { A as emberArray } from '@ember/array';
import asArray from '../utils/as-array.ts';

export function findBy<T>([byPath, value, array]: [keyof T, T[keyof T], T[]]) {
  if (isEmpty(byPath)) {
    return [];
  }

  return emberArray(asArray(array)).findBy(byPath, value);
}

export default helper(findBy);
