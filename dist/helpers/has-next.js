import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { next } from './next.js';
import isEqual from '../utils/is-equal.js';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.js';
import asArray from '../utils/as-array.js';

function hasNext(currentValue, maybeArray, useDeepEqual = false) {
  const array = asArray(maybeArray);
  const nextValue = next(currentValue, array, useDeepEqual);
  const isNotSameValue = !isEqual(nextValue, currentValue, useDeepEqual);
  return isNotSameValue && isPresent(nextValue);
}
var hasNext$1 = helper(function (params) {
  const {
    currentValue,
    array,
    useDeepEqual
  } = getValueArrayAndUseDeepEqualFromParams(params);
  return hasNext(currentValue, array, useDeepEqual);
});

export { hasNext$1 as default, hasNext };
//# sourceMappingURL=has-next.js.map
