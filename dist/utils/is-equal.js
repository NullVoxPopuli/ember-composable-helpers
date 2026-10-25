import { isEqual as isEqual$1 } from '@ember/utils';

function isEqual(firstValue, secondValue, useDeepEqual = false) {
  if (useDeepEqual) {
    return JSON.stringify(firstValue) === JSON.stringify(secondValue);
  } else {
    return isEqual$1(firstValue, secondValue) || isEqual$1(secondValue, firstValue);
  }
}

export { isEqual as default };
//# sourceMappingURL=is-equal.js.map
