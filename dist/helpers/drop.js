import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function drop([dropAmount, array]) {
  return asArray(array).slice(dropAmount);
}
var drop_default = helper(drop);

export { drop_default as default, drop };
//# sourceMappingURL=drop.js.map
