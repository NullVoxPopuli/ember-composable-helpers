function getValueArrayAndUseDeepEqualFromParams(params) {
  let currentValue = params[0];
  let array;
  let useDeepEqual = false;
  if (params.length === 2) {
    array = params[1];
  } else {
    useDeepEqual = params[1];
    array = params[2];
  }
  return {
    currentValue,
    array,
    useDeepEqual
  };
}

export { getValueArrayAndUseDeepEqualFromParams as default };
//# sourceMappingURL=get-value-array-and-use-deep-equal-from-params.js.map
