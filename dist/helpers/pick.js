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
var pick_default = helper(pick);

export { pick_default as default, pick };
//# sourceMappingURL=pick.js.map
