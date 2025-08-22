function optional([action]) {
  if (typeof action === 'function') {
    return action;
  }
  return i => i;
}
function optionalHelper(action) {
  return optional([action]);
}

export { optionalHelper as default, optional };
//# sourceMappingURL=optional.js.map
