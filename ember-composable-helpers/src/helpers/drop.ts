import { helper } from '@ember/component/helper';

import asArray from '../utils/as-array.ts';

export function drop<T>([dropAmount, array]: [number, T[]]) {
  return asArray(array).slice(dropAmount);
}

export default helper(drop);
