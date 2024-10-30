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
    return actions.reduce((acc, curr, idx) => {
      if (idx === 0) {
        return curr(...args);
      }
      return invokeFunction(acc, curr);
    }, undefined);
  };
}
var pipe$1 = helper(pipe);

export { pipe$1 as default, invokeFunction, pipe };
//# sourceMappingURL=pipe.js.map
