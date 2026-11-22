import { helper } from '@ember/component/helper';

/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Calls a function
 */
function compute([action, ...params]) {
  return action(...params);
}
var compute_default = helper(compute);

export { compute, compute_default as default };
//# sourceMappingURL=compute.js.map
