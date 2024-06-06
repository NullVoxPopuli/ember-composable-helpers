import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import asArray from '../utils/as-array.js';

const {
  max,
  ceil
} = Math;
function chunk(num, array) {
  let integer = parseInt(num, 10);
  let size = max(integer, 0);
  let length = 0;
  if (isArray(array)) {
    length = array.length;
  }
  array = asArray(array);
  if (!length || size < 1) {
    return [];
  } else {
    let index = 0;
    let resultIndex = -1;
    let result = new Array(ceil(length / size));
    while (index < length) {
      result[++resultIndex] = array.slice(index, index += size);
    }
    return result;
  }
}
var chunk$1 = helper(function ([num, array]) {
  return chunk(num, array);
});

export { chunk, chunk$1 as default };
//# sourceMappingURL=chunk.js.map
