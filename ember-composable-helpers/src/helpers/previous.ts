import { helper } from "@ember/component/helper";
import getIndex from "../utils/get-index.ts";
import { isEmpty } from "@ember/utils";
import getValueArrayAndUseDeepEqualFromParams from "../-private/get-value-array-and-use-deep-equal-from-params.ts";

export function previous<T>(currentValue: T, array: T[], useDeepEqual = false) {
  let currentIndex = getIndex(array, currentValue, useDeepEqual) as number;

  if (isEmpty(currentIndex)) {
    return;
  }

  return currentIndex === 0 ? currentValue : array.at(currentIndex - 1);
}

export default helper(function <T>(params: [T, boolean | T[], T[]?]) {
  let { currentValue, array, useDeepEqual } =
    getValueArrayAndUseDeepEqualFromParams(params);

  return previous(currentValue, array as T[], useDeepEqual);
});
