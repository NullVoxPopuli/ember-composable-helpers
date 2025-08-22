import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import { isPresent } from '@ember/utils';
import { get } from '@ember/object';
import isEqual from '../utils/is-equal.js';
import asArray from '../utils/as-array.js';

function rejectBy([byPath, value, array]) {
  if (!isArray(array) && isArray(value)) {
    array = value;
    value = undefined;
  }
  array = asArray(array);
  let filterFn;
  if (isPresent(value)) {
    if (typeof value === 'function') {
      filterFn = item => !value(get(item, byPath));
    } else {
      filterFn = item => !isEqual(get(item, byPath), value);
    }
  } else {
    filterFn = item => !get(item, byPath);
  }
  return array.filter(filterFn);
}
var rejectBy$1 = helper(rejectBy);

export { rejectBy$1 as default, rejectBy };
//# sourceMappingURL=reject-by.js.map
