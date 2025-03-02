import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function slice([...args]) {
  let array = args.pop();
  array = asArray(array);
  return array.slice(...args);
}
var slice$1 = helper(slice);

export { slice$1 as default, slice };
//# sourceMappingURL=slice.js.map
