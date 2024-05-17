import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { previous } from './previous';
import isEqual from '../utils/is-equal';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params';
import asArray from '../utils/as-array';

export function hasPrevious<T>(currentValue: T, maybeArray: T[], useDeepEqual = false) {
  let array = asArray(maybeArray);
  let previousValue = previous(currentValue, array, useDeepEqual);
  let isNotSameValue = !isEqual(previousValue, currentValue, useDeepEqual);

  return isNotSameValue && isPresent(previousValue);
}

export default helper(function<T>(params: [T, boolean | T[], T[]?]) {
  let { currentValue, array, useDeepEqual } = getValueArrayAndUseDeepEqualFromParams(params);

  return hasPrevious(currentValue, array as T[], useDeepEqual);
});
