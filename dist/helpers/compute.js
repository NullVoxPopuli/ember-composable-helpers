import { helper } from '@ember/component/helper';

function compute([action, ...params]) {
  return action(...params);
}
var compute$1 = helper(compute);

export { compute, compute$1 as default };
//# sourceMappingURL=compute.js.map
