import { helper } from '@ember/component/helper';
import { pipe } from './pipe.js';
import ACTION from '../-private/closure-action.js';

const closurePipe = pipe;
if (ACTION) {
  closurePipe[ACTION] = true; // TODO: remove never
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var pipeAction = helper(closurePipe); // TODO: remove any

export { pipeAction as default };
//# sourceMappingURL=pipe-action.js.map
