import { helper } from '@ember/component/helper';
import getIndex from '../utils/get-index.ts';
import { isEmpty } from '@ember/utils';
import { A as emberArray } from '@ember/array';
import getValueArrayAndUseDeepEqualFromParams from '../-private/get-value-array-and-use-deep-equal-from-params.ts';
import asArray from '../utils/as-array.ts';

export function next<T>(currentValue: T, maybeArray: T[], useDeepEqual = false) {
  let array = asArray(maybeArray);
  let currentIndex = getIndex(array, currentValue, useDeepEqual) as number;
  let lastIndex = array.length - 1;

  if (isEmpty(currentIndex)) {
    return;
  }

  return currentIndex === lastIndex ? currentValue : emberArray(array).objectAt(currentIndex + 1);
}

export default helper(function<T>(params: [T, boolean | T[], T[]?]) {
  let { currentValue, array, useDeepEqual } = getValueArrayAndUseDeepEqualFromParams(params);

  return next(currentValue, array as T[], useDeepEqual);
});
