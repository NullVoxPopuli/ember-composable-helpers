import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.js';

function map([callback, array]) {
  if (isEmpty(callback)) {
    return [];
  }
  return asArray(array).map(callback);
}
var map_default = helper(map);

export { map_default as default, map };
//# sourceMappingURL=map.js.map
