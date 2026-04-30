import { typeOf } from '@ember/utils';

export default function isObject(val: unknown) {
  return typeOf(val) === 'object' || typeOf(val) === 'instance';
}
