import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import asArray from '../utils/as-array.js';

function join([separator, rawArray]) {
  let array = asArray(rawArray);
  if (isArray(separator)) {
    array = separator;
    separator = ',';
  }
  return array.join(separator);
}
var join$1 = helper(join);

export { join$1 as default, join };
//# sourceMappingURL=join.js.map
