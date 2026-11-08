import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.js';

function filter([callback, array]) {
  if (isEmpty(callback) || !array) {
    return [];
  }
  return asArray(array).filter(callback);
}
var filter_default = helper(filter);

export { filter_default as default, filter };
//# sourceMappingURL=filter.js.map
