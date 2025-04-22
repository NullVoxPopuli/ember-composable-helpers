import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.js';

function reduce([callback, initialValue, array]) {
  if (isEmpty(callback)) {
    return [];
  }
  return asArray(array).reduce(callback, initialValue);
}
var reduce$1 = helper(reduce);

export { reduce$1 as default, reduce };
//# sourceMappingURL=reduce.js.map
