import { typeOf } from '@ember/utils';
import isObject from './is-object.js';

/* eslint-disable @typescript-eslint/unbound-method */
function isPromiseLike(obj = {}) {
  return typeOf(obj.then) === 'function' && typeOf(obj.catch) === 'function';
}
function isPromise(obj) {
  return isObject(obj) && isPromiseLike(obj);
}

export { isPromise as default };
//# sourceMappingURL=is-promise.js.map
