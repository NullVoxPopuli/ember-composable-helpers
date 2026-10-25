import { helper } from '@ember/component/helper';

function keys([object]) {
  if (!object) {
    return object;
  }
  return Object.keys(object);
}
var keys_default = helper(keys);

export { keys_default as default, keys };
//# sourceMappingURL=keys.js.map
