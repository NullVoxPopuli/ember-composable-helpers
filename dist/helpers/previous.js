import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.js';
import { isEmpty } from '@ember/utils';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';

function previous(currentValue, array, useDeepEqual = false) {
  const currentIndex = getIndex(array, currentValue, useDeepEqual);
  if (null === currentIndex || isEmpty(currentIndex)) {
    return;
  }
  return currentIndex === 0 ? currentValue : array.at(currentIndex - 1);
}
var previous$1 = helper(function (params) {
  const {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return previous(currentValue, array, useDeepEqual);
});

export { previous$1 as default, previous };
//# sourceMappingURL=previous.js.map
