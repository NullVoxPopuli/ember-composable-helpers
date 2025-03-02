import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import { lte, lt, gte, gt } from '../utils/comparison.js';

function range([min, max, isInclusive]) {
  isInclusive = typeOf(isInclusive) === 'boolean' ? isInclusive : false;
  let numbers = [];
  if (min < max) {
    let testFn = isInclusive ? lte : lt;
    for (let i = min; testFn(i, max); i++) {
      numbers.push(i);
    }
  }
  if (min > max) {
    let testFn = isInclusive ? gte : gt;
    for (let i = min; testFn(i, max); i--) {
      numbers.push(i);
    }
  }
  if (min === max && isInclusive) {
    numbers.push(max);
  }
  return numbers;
}
var range$1 = helper(range);

export { range$1 as default, range };
//# sourceMappingURL=range.js.map
