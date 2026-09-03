import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import asArray from '../utils/as-array.ts';

export function findBy<T, K extends keyof T>([byPath, value, array]: [
  K,
  T[K],
  T[],
]) {
  if (isEmpty(byPath)) {
    return undefined;
  }

  return asArray(array).find((item) => get(item, String(byPath)) === value);
}

export default helper(findBy);
