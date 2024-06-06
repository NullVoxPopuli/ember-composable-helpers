import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

function pick([path, action] /*, hash*/) {
  return function (event) {
    let value = get(event, path);
    if (!action) {
      return value;
    }
    action(value);
  };
}
var pick$1 = helper(pick);

export { pick$1 as default, pick };
//# sourceMappingURL=pick.js.map
