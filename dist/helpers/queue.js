import { helper } from '@ember/component/helper';
import isPromise from '../utils/is-promise.js';

function invokeMaybeNullable(curr, args) {
  return curr == null ? undefined : curr(...args);
}
function queue(positional = []) {
  const actions = positional;
  return function (...args) {
    const invokeWithArgs = function (acc, curr) {
      if (isPromise(acc)) {
        return acc.then(() => invokeMaybeNullable(curr, args));
      }
      return invokeMaybeNullable(curr, args);
    };

    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    return actions.reduce((acc, curr, idx) => {
      if (idx === 0) {
        return invokeMaybeNullable(curr, args);
      }
      return invokeWithArgs(acc, curr);
    }, undefined);
  };
}
var queue$1 = helper(queue);

export { queue$1 as default, queue };
//# sourceMappingURL=queue.js.map
