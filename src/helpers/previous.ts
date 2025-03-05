import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.ts';
import { isEmpty } from '@ember/utils';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.ts';

export function previous<T>(currentValue: T, array: T[], useDeepEqual = false) {
  const currentIndex = getIndex(array, currentValue, useDeepEqual);

  if (null === currentIndex || isEmpty(currentIndex)) {
    return;
  }

  return currentIndex === 0 ? currentValue : array.at(currentIndex - 1);
}

export default helper(function <T>(params: [T, boolean | T[], T[]?]) {
  const { currentValue, array, useDeepEqual } =
    getValueArrayAndUseDeepEqualFromParams(params);

  return previous(currentValue, array as T[], useDeepEqual);
});
