import { A } from '@ember/array';
import isEqual from './is-equal.js';

function getIndex(array, currentValue, useDeepEqual) {
  let needle = currentValue;
  if (useDeepEqual) {
    needle = A(array).find(object => {
      return isEqual(object, currentValue, useDeepEqual);
    });
  }
  let index = A(array).indexOf(needle);
  return index >= 0 ? index : null;
}

export { getIndex as default };
//# sourceMappingURL=get-index.js.map
