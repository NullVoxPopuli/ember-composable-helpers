import { helper } from '@ember/component/helper';
import { isArray as isEmberArray } from '@ember/array';
import asArray from '../utils/as-array.ts';

export function join<T>([separator, rawArray]: [string | T[], T[]?]): string {
  let array = asArray(rawArray!);

  if (isEmberArray(separator)) {
    array = separator as T[];
    separator = ',';
  }

  return array.join(separator);
}

export default helper(join);
