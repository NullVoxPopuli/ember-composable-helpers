import { typeOf } from '@ember/utils';

function isObject(val) {
  return typeOf(val) === 'object' || typeOf(val) === 'instance';
}

export { isObject as default };
//# sourceMappingURL=is-object.js.map
