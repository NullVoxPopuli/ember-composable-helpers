import { helper } from '@ember/component/helper';

function optional([action]) {
  if (typeof action === 'function') {
    return action;
  }
  return i => i;
}
var optional$1 = helper(optional);

export { optional$1 as default, optional };
//# sourceMappingURL=optional.js.map
