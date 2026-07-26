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
var mapBy_default = helper(mapBy);

export { mapBy_default as default, mapBy };
//# sourceMappingURL=map-by.js.map
