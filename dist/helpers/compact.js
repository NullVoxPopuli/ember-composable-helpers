import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { isArray } from '@ember/array';

function compact([value]) {
  let array;
  if (Array.isArray(value) || isArray(value)) {
    array = value;
  } else {
    array = [value];
  }
  return array.filter(item => isPresent(item));
}
var compact$1 = helper(compact);

export { compact, compact$1 as default };
//# sourceMappingURL=compact.js.map
