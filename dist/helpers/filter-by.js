import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import isEqual from '../utils/is-equal.js';
import asArray from '../utils/as-array.js';

function filterBy([byPath, value, array]) {
  let isPresent = true;
  if (!isArray(array) && isArray(value)) {
    array = value;
    value = undefined;
    isPresent = false;
  }
  array = asArray(array);
  if (isEmpty(byPath) || isEmpty(array)) {
    return [];
  }
  let filterFn;
  if (isPresent) {
    if (typeof value === 'function') {
      filterFn = item => value(get(item, byPath));
    } else {
      filterFn = item => isEqual(get(item, byPath), value);
    }
  } else {
    filterFn = item => !!get(item, byPath);
  }
  return array.filter(filterFn);
}
var filterBy$1 = helper(filterBy);

export { filterBy$1 as default, filterBy };
//# sourceMappingURL=filter-by.js.map
