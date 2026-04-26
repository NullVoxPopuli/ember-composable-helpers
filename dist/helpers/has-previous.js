import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { previous } from './previous.js';
import isEqual from '../utils/is-equal.js';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';
import asArray from '../utils/as-array.js';

function hasPrevious(currentValue, maybeArray, useDeepEqual = false) {
  const array = asArray(maybeArray);
  const previousValue = previous(currentValue, array, useDeepEqual);
  const isNotSameValue = !isEqual(previousValue, currentValue, useDeepEqual);
  return isNotSameValue && isPresent(previousValue);
}
var hasPrevious_default = helper(function (params) {
  const {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return hasPrevious(currentValue, array, useDeepEqual);
});

export { hasPrevious_default as default, hasPrevious };
//# sourceMappingURL=has-previous.js.map
