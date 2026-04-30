import { helper } from '@ember/component/helper';
import { toggle } from './toggle.ts';
import ACTION from '../-private/closure-action.ts';

const closureToggle = toggle;
if (ACTION) {
  closureToggle[ACTION] = true as never; // TODO: remove never
}

export default helper(closureToggle);
