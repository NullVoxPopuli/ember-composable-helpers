import { helper } from '@ember/component/helper';
import { pipe } from './pipe.js';
import ACTION from '../-private/closure-action.js';

const closurePipe = pipe;
if (ACTION) {
  closurePipe[ACTION] = true;
}
var pipeAction = helper(closurePipe);

export { pipeAction as default };
//# sourceMappingURL=pipe-action.js.map
