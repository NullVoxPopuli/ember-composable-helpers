import { typeOf } from '@ember/utils';
import isObject from './is-object.ts';

function isPromiseLike(obj: unknown = {}) {
  return (
    // eslint-disable-next-line @typescript-eslint/unbound-method
    typeOf((obj as Promise<unknown>).then) === 'function' &&
    // eslint-disable-next-line @typescript-eslint/unbound-method
    typeOf((obj as Promise<unknown>).catch) === 'function'
  );
}

export default function isPromise(obj: unknown): obj is Promise<void> {
  return isObject(obj) && isPromiseLike(obj);
}
