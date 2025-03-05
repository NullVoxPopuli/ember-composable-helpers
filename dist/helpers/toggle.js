import { helper } from '@ember/component/helper';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';

function nextIndex(length, currentIdx) {
  if (currentIdx === -1 || currentIdx + 1 === length) {
    return 0;
  }
  return currentIdx + 1;
}
function toggle([prop, obj, ...values]) {
  return function () {
    const currentValue = get(obj, prop);
    if (isPresent(values)) {
      const currentIdx = values.indexOf(currentValue);
      const nextIdx = nextIndex(values.length, currentIdx);
      return set(obj, prop, values[nextIdx]);
    }
    return set(obj, prop, !currentValue);
  };
}
var toggle$1 = helper(toggle);

export { toggle$1 as default, toggle };
//# sourceMappingURL=toggle.js.map
