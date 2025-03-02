import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function union([...arrays]) {
  let items = [].concat(...arrays);
  return items.filter((value, index, array) => asArray(array).indexOf(value) === index);
}
var union$1 = helper(union);

export { union$1 as default, union };
//# sourceMappingURL=union.js.map
