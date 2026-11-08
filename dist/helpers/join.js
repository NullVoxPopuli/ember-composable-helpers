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
var join_default = helper(join);

export { join_default as default, join };
//# sourceMappingURL=join.js.map
