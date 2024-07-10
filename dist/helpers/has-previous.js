import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { previous } from './previous.js';
import isEqual from '../utils/is-equal.js';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';
import asArray from '../utils/as-array.js';

function hasPrevious(currentValue, maybeArray, useDeepEqual = false) {
  let array = asArray(maybeArray);
  let previousValue = previous(currentValue, array, useDeepEqual);
  let isNotSameValue = !isEqual(previousValue, currentValue, useDeepEqual);
  return isNotSameValue && isPresent(previousValue);
}
var hasPrevious$1 = helper(function (params) {
  let {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return hasPrevious(currentValue, array, useDeepEqual);
});

export { hasPrevious$1 as default, hasPrevious };
//# sourceMappingURL=has-previous.js.map
