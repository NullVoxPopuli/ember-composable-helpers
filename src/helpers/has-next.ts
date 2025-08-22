import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { next } from './next.ts';
import isEqual from '../utils/is-equal.ts';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.ts';
import asArray from '../utils/as-array.ts';

export function hasNext<T>(
  currentValue: T,
  maybeArray: T[],
  useDeepEqual = false,
) {
  const array = asArray(maybeArray);
  const nextValue = next(currentValue, array, useDeepEqual);
  const isNotSameValue = !isEqual(nextValue, currentValue, useDeepEqual);

  return isNotSameValue && isPresent(nextValue);
}

export default helper(function <T>(params: [T, boolean | T[], T[]?]) {
  const { currentValue, array, useDeepEqual } =
    getValueArrayAndUseDeepEqualFromParams(params);

  return hasNext(currentValue, array as T[], useDeepEqual);
});
