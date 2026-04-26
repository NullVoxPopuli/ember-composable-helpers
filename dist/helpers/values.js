import { helper } from '@ember/component/helper';

function values([object]) {
  if (!object) {
    return object;
  }
  return Object.values(object);
}
var values_default = helper(values);

export { values_default as default, values };
//# sourceMappingURL=values.js.map
