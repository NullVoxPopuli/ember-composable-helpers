/* eslint-disable @typescript-eslint/unbound-method */
import { typeOf } from '@ember/utils';
import isObject from './is-object.ts';

function isPromiseLike(obj: unknown = {}) {
  return (
    typeOf((obj as Promise<unknown>).then) === 'function' &&
    typeOf((obj as Promise<unknown>).catch) === 'function'
  );
}

export default function isPromise(obj: unknown): obj is Promise<void> {
  return isObject(obj) && isPromiseLike(obj);
}
