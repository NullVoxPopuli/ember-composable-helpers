import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.js';
import { isEmpty } from '@ember/utils';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';
import asArray from '../utils/as-array.js';

function next(currentValue, maybeArray, useDeepEqual = false) {
  const array = asArray(maybeArray);
  const currentIndex = getIndex(array, currentValue, useDeepEqual);
  const lastIndex = array.length - 1;
  if (null === currentIndex || isEmpty(currentIndex)) {
    return;
  }
  return currentIndex === lastIndex ? currentValue : array.at(currentIndex + 1);
}
var next$1 = helper(function (params) {
  const {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return next(currentValue, array, useDeepEqual);
});

export { next$1 as default, next };
//# sourceMappingURL=next.js.map
