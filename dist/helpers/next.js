import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.js';
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';
import asArray from '../utils/as-array.js';

function next(currentValue, maybeArray, useDeepEqual = false) {
  let array = asArray(maybeArray);
  let currentIndex = getIndex(array, currentValue, useDeepEqual);
  let lastIndex = array.length - 1;
  if (isEmpty(currentIndex)) {
    return;
  }
  return currentIndex === lastIndex ? currentValue : A(array).objectAt(currentIndex + 1);
}
var next$1 = helper(function (params) {
  let {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return next(currentValue, array, useDeepEqual);
});

export { next$1 as default, next };
//# sourceMappingURL=next.js.map
