import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import asArray from '../utils/as-array.js';

function findBy([byPath, value, array]) {
  if (isEmpty(byPath)) {
    return undefined;
  }
  return asArray(array).find(item => get(item, String(byPath)) === value);
}
var findBy$1 = helper(findBy);

export { findBy$1 as default, findBy };
//# sourceMappingURL=find-by.js.map
