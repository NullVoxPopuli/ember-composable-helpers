import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.ts';
import { isEmpty } from '@ember/utils';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.ts';
import asArray from '../utils/as-array.ts';

export function next<T>(
  currentValue: T,
  maybeArray: T[],
  useDeepEqual = false,
) {
  const array = asArray(maybeArray);
  const currentIndex = getIndex(array, currentValue, useDeepEqual);
  const lastIndex = array.length - 1;

  if (null === currentIndex || isEmpty(currentIndex)) {
    return;
  }

  return currentIndex === lastIndex ? currentValue : array.at(currentIndex + 1);
}

export default helper(function <T>(params: [T, boolean | T[], T[]?]) {
  const { currentValue, array, useDeepEqual } =
    getValueArrayAndUseDeepEqualFromParams(params);

  return next(currentValue, array as T[], useDeepEqual);
});
