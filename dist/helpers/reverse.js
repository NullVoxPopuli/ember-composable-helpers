import { helper } from '@ember/component/helper';
import { isArray, A } from '@ember/array';

function reverse([array]) {
  if (!isArray(array)) {
    return [array];
  }
  return A(array).slice(0).reverse();
}
var reverse_default = helper(reverse);

export { reverse_default as default, reverse };
//# sourceMappingURL=reverse.js.map
