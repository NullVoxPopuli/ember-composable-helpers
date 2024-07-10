import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import asArray from '../utils/as-array.js';

function flatten(array) {
  if (!isArray(array)) {
    return array;
  }
  return asArray(array).reduce((flattened, el) => {
    return flattened.concat(flatten(el));
  }, []);
}
var flatten$1 = helper(function ([array]) {
  return flatten(array);
});

export { flatten$1 as default, flatten };
//# sourceMappingURL=flatten.js.map
