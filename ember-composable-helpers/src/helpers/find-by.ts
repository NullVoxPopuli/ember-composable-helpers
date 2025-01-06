import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { get } from "@ember/object";
import asArray from '../utils/as-array.ts';

export function findBy<T>([byPath, value, array]: [keyof T, T[keyof T], T[]]) {
  if (isEmpty(byPath)) {
    return undefined;
  }

  return asArray(array).find((item) => get(item, String(byPath)) === value);
}

export default helper(findBy);
