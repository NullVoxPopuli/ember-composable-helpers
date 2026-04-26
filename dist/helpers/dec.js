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
var dec_default = helper(dec);

export { dec, dec_default as default };
//# sourceMappingURL=dec.js.map
