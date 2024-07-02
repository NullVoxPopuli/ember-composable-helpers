import { helper } from '@ember/component/helper';
import { isArray as isEmberArray } from '@ember/array';
import { isPresent } from '@ember/utils';
import { get } from '@ember/object';
import isEqual from '../utils/is-equal.ts';
import asArray from '../utils/as-array.ts';

export function rejectBy<T>([byPath, value, array]: [string, T | T[] | undefined, T[]]) {
  if (!isEmberArray(array) && isEmberArray(value)) {
    array = value;
    value = undefined;
  }
  array = asArray(array);

  let filterFn;

  if (isPresent(value)) {
    if (typeof value === 'function') {
      filterFn = (item: T) => !value(get(item, byPath));
    } else {
      filterFn = (item: T) => !isEqual(get(item, byPath), value);
    }
  } else {
    filterFn = (item: T) => !get(item, byPath);
  }

  return array.filter(filterFn);
}

export default helper(rejectBy);
