import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { previous } from './previous.ts';
import isEqual from '../utils/is-equal.ts';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.ts';
import asArray from '../utils/as-array.ts';

export function hasPrevious<T>(
  currentValue: T,
  maybeArray: T[],
  useDeepEqual = false,
) {
  const array = asArray(maybeArray);
  const previousValue = previous(currentValue, array, useDeepEqual);
  const isNotSameValue = !isEqual(previousValue, currentValue, useDeepEqual);

  return isNotSameValue && isPresent(previousValue);
}

export default helper(function <T>(params: [T, boolean | T[], T[]?]) {
  const { currentValue, array, useDeepEqual } =
    getValueArrayAndUseDeepEqualFromParams(params);

  return hasPrevious(currentValue, array as T[], useDeepEqual);
});
