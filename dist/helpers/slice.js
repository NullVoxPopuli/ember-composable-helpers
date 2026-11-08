import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function slice([...args]) {
  let array = args.pop();
  array = asArray(array);
  return array.slice(...args);
}
var slice_default = helper(slice);

export { slice_default as default, slice };
//# sourceMappingURL=slice.js.map
