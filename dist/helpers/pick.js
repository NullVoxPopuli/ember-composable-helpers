import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

function pick([path, action]) {
  return function (obj) {
    const value = get(obj, path);
    if (!action) {
      return value;
    }
    action(value);
  };
}
var pick$1 = helper(pick);

export { pick$1 as default, pick };
//# sourceMappingURL=pick.js.map
