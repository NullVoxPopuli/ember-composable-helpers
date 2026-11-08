import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import { gte, lte, gt, lt } from '../utils/comparison.ts';

export function range([min, max, isInclusive]: [number, number, boolean?]) {
  isInclusive = typeOf(isInclusive) === 'boolean' ? isInclusive : false;
  const numbers: number[] = [];

  if (min < max) {
    const testFn = isInclusive ? lte : lt;
    for (let i = min; testFn(i, max); i++) {
      numbers.push(i);
    }
  }

  if (min > max) {
    const testFn = isInclusive ? gte : gt;
    for (let i = min; testFn(i, max); i--) {
      numbers.push(i);
    }
  }

  if (min === max && isInclusive) {
    numbers.push(max);
  }

  return numbers;
}

export default helper(range);
