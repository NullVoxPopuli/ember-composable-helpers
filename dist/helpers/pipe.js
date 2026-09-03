import { helper } from '@ember/component/helper';
import isPromise from '../utils/is-promise.js';

function invokeFunction(acc, curr) {
  if (isPromise(acc)) {
    return acc.then(curr);
  }
  return curr(acc);
}
function pipe(actions = []) {
  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    return actions.reduce((acc, curr, idx) => {
      if (idx === 0) {
        return curr(...args);
      }
      return invokeFunction(acc, curr);
    }, undefined);
  };
}
var pipe_default = helper(pipe);

export { pipe_default as default, invokeFunction, pipe };
//# sourceMappingURL=pipe.js.map
