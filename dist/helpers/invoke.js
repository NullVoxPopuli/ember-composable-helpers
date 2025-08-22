import { isArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';

const {
  all
} = RSVP;

/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Invokes a method on an object, or on each object of an array
 */
function invoke([methodName, ...args]) {
  const obj = args.pop();
  if (isArray(obj)) {
    return function () {
      const promises = obj.map(item => item[methodName]?.(...args));
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
