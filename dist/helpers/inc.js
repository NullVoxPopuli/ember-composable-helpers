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
var inc_default = helper(inc);

export { inc_default as default, inc };
//# sourceMappingURL=inc.js.map
