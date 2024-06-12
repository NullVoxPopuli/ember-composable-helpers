import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array';

export function take<T>([takeAmount, array]: [number, T[]]) {
  return asArray(array).slice(0, takeAmount);
}

export default helper(take);
