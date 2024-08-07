import { helper } from '@ember/component/helper';
import { A as emberArray, isArray as isEmberArray } from '@ember/array';

export function reverse<T>([array]: [T[]]) {
  if (!isEmberArray(array)) {
    return [array];
  }

  return emberArray(array).slice(0).reverse();
}

export default helper(reverse);
