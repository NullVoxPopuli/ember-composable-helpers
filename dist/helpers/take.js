import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function take([takeAmount, array]) {
  return asArray(array).slice(0, takeAmount);
}
var take$1 = helper(take);

export { take$1 as default, take };
//# sourceMappingURL=take.js.map
