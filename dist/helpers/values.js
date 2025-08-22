import { helper } from '@ember/component/helper';

function values([object]) {
  if (!object) {
    return object;
  }
  return Object.values(object);
}
var values$1 = helper(values);

export { values$1 as default, values };
//# sourceMappingURL=values.js.map
