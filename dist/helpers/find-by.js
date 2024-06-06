import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
import asArray from '../utils/as-array.js';

function findBy([byPath, value, array]) {
  if (isEmpty(byPath)) {
    return [];
  }
  return A(asArray(array)).findBy(byPath, value);
}
var findBy$1 = helper(findBy);

export { findBy$1 as default, findBy };
//# sourceMappingURL=find-by.js.map
