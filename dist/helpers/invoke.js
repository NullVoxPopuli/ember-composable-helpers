import { isArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';

const {
  all
} = RSVP;
function invoke([methodName, ...args]) {
  let obj = args.pop();
  if (isArray(obj)) {
    return function () {
      let promises = obj.map(item => item[methodName]?.(...args));
      return all(promises);
    };
  }
  return function () {
    return obj[methodName]?.(...args);
  };
}
var invoke$1 = helper(invoke);

export { invoke$1 as default, invoke };
//# sourceMappingURL=invoke.js.map
