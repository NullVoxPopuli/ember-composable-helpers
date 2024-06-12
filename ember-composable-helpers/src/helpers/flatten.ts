import { helper } from '@ember/component/helper';
import { isArray as isEmberArray } from '@ember/array';
import asArray from '../utils/as-array';

export function flatten<T>(array: T[]): T[] {
  if (!isEmberArray(array)) {
    return array;
  }

  return asArray(array).reduce<T[]>((flattened, el) => {
    return flattened.concat(flatten(el as T[]));
  }, []);
}

export default helper(function<T>([array]: [T[]]) {
  return flatten(array);
});
