import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.ts';

export function mapBy<T>([byPath, array]: [keyof T, T[]]) {
  if (isEmpty(byPath)) {
    return [];
  }

  return asArray(array).map(item => get(item as object, byPath as string));
}

export default helper(mapBy);
