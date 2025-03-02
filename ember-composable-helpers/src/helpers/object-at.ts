import { helper } from '@ember/component/helper';
import { A, isArray as isEmberArray } from '@ember/array';

export function objectAt<T>(index: number | string, array: T[]) {
  if (!isEmberArray(array)) {
    return undefined;
  }

  index = parseInt(index as string, 10);

  return A(array).objectAt(index);
}

export default helper(function <T>([index, array]: [number, T[]]):
  | T
  | undefined {
  return objectAt(index, array);
});
