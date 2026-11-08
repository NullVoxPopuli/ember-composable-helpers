import isEqual from './is-equal.js';

function getIndex(array, currentValue, useDeepEqual) {
  let needle = currentValue;
  if (useDeepEqual) {
    needle = array.find(object => {
      return isEqual(object, currentValue, useDeepEqual);
    });
  }
  const index = (array || []).indexOf(needle);
  return index >= 0 ? index : null;
}

export { getIndex as default };
//# sourceMappingURL=get-index.js.map
