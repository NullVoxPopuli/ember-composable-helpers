import { helper } from '@ember/component/helper';
import { isArray, A } from '@ember/array';

function contains(needle, haystack) {
  return A(haystack).includes(needle);
}
function without(needle, haystack) {
  if (!isArray(haystack)) {
    return false;
  }
  if (isArray(needle) && needle.length) {
    return haystack.reduce((acc, val) => {
      return contains(val, needle) ? acc : acc.concat(val);
    }, []);
  }
  return A(haystack).without(needle);
}
var without_default = helper(function ([needle, haystack]) {
  return without(needle, haystack);
});

export { without_default as default, without };
//# sourceMappingURL=without.js.map
