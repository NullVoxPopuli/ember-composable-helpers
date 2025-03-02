import { helper } from '@ember/component/helper';

function keys([object]) {
  if (!object) {
    return object;
  }
  return Object.keys(object);
}
var keys$1 = helper(keys);

export { keys$1 as default, keys };
//# sourceMappingURL=keys.js.map
