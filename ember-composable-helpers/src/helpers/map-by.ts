import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.ts';

export function mapBy<T extends object>([byPath, array]: [keyof T, T[]]) {
  if (isEmpty(byPath)) {
    return [];
  }

  return asArray(array).map(item => get(item, byPath));
}

export default helper(mapBy);
