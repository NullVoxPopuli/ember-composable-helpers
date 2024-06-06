import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.js';
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';

function previous(currentValue, array, useDeepEqual = false) {
  let currentIndex = getIndex(array, currentValue, useDeepEqual);
  if (isEmpty(currentIndex)) {
    return;
  }
  return currentIndex === 0 ? currentValue : A(array).objectAt(currentIndex - 1);
}
var previous$1 = helper(function (params) {
  let {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return previous(currentValue, array, useDeepEqual);
});

export { previous$1 as default, previous };
//# sourceMappingURL=previous.js.map
