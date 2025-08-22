import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';

function inc([step, val]) {
  if (isEmpty(val)) {
    val = step;
    step = undefined;
  }
  val = Number(val);
  if (isNaN(val)) {
    return;
  }
  if (step === undefined) {
    step = 1;
  }
  return val + step;
}
var inc$1 = helper(inc);

export { inc$1 as default, inc };
//# sourceMappingURL=inc.js.map
