import { helper } from '@ember/component/helper';
import { toggle } from './toggle.js';
import ACTION from '../-private/closure-action.js';

const closureToggle = toggle;
if (ACTION) {
  closureToggle[ACTION] = true;
}
var toggleAction = helper(closureToggle);

export { toggleAction as default };
//# sourceMappingURL=toggle-action.js.map
