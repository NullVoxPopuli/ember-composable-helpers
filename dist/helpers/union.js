import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function union([...arrays]) {
  const items = [].concat(...arrays);
  return items.filter((value, index, array) => asArray(array).indexOf(value) === index);
}
var union_default = helper(union);

export { union_default as default, union };
//# sourceMappingURL=union.js.map
