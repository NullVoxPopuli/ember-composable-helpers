import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import { lte, lt, gte, gt } from '../utils/comparison.js';

function range([min, max, isInclusive]) {
  isInclusive = typeOf(isInclusive) === 'boolean' ? isInclusive : false;
  const numbers = [];
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
var range_default = helper(range);

export { range_default as default, range };
//# sourceMappingURL=range.js.map
