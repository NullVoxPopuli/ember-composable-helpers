import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.js';

function filter([callback, array]) {
  if (isEmpty(callback) || !array) {
    return [];
  }
  return asArray(array).filter(callback);
}
var filter$1 = helper(filter);

export { filter$1 as default, filter };
//# sourceMappingURL=filter.js.map
