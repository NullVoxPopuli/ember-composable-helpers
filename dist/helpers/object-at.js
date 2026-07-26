import { helper } from '@ember/component/helper';
import { isArray, A } from '@ember/array';

function objectAt(index, array) {
  if (!isArray(array)) {
    return undefined;
  }
  index = parseInt(index, 10);
  return A(array).objectAt(index);
}
var objectAt_default = helper(function ([index, array]) {
  return objectAt(index, array);
});

export { objectAt_default as default, objectAt };
//# sourceMappingURL=object-at.js.map
