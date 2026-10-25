import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function take([takeAmount, array]) {
  return asArray(array).slice(0, takeAmount);
}
var take_default = helper(take);

export { take_default as default, take };
//# sourceMappingURL=take.js.map
