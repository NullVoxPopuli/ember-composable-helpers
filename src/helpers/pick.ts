import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import type { AnyVoidFn } from '../utils/types';

export function pick<T extends Event | Record<string, unknown>>([
  path,
  action,
]: [string, AnyVoidFn]) {
  return function (obj: T) {
    let value = get(obj, path);

    if (!action) {
      return value;
    }

    action(value);
  };
}

export default helper(pick);
