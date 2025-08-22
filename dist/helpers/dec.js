import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';

function dec([step, val]) {
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
  return val - step;
}
var dec$1 = helper(dec);

export { dec, dec$1 as default };
//# sourceMappingURL=dec.js.map
