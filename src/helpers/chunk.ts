import { helper } from '@ember/component/helper';
import { isArray as isEmberArray } from '@ember/array';
const { max, ceil } = Math;
import asArray from '../utils/as-array.ts';

export function chunk<T>(num: number | string, array: T[]) {
  const integer = parseInt(num as string, 10);
  const size = max(integer, 0);

  let length = 0;
  if (isEmberArray(array)) {
    length = array.length;
  }

  array = asArray(array);

  if (!length || size < 1) {
    return [];
  } else {
    let index = 0;
    let resultIndex = -1;
    const result = new Array(ceil(length / size));

    while (index < length) {
      result[++resultIndex] = array.slice(index, (index += size));
    }

    return result;
  }
}

export default helper(function <T>([num, array]: [number | string, T[]]) {
  return chunk(num, array);
});
