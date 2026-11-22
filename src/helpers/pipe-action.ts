import { helper } from '@ember/component/helper';
import { pipe } from './pipe.ts';
import ACTION from '../-private/closure-action.ts';

const closurePipe = pipe;
if (ACTION) {
  closurePipe[ACTION] = true as never; // TODO: remove never
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default helper(closurePipe as any); // TODO: remove any
