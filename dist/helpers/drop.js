import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function drop([dropAmount, array]) {
  return asArray(array).slice(dropAmount);
}
var drop$1 = helper(drop);

export { drop$1 as default, drop };
//# sourceMappingURL=drop.js.map
