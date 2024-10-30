import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.js';

function mapBy([byPath, array]) {
  if (isEmpty(byPath)) {
    return [];
  }
  return asArray(array).map(item => get(item, byPath));
}
var mapBy$1 = helper(mapBy);

export { mapBy$1 as default, mapBy };
//# sourceMappingURL=map-by.js.map
