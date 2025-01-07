import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import type { AnyVoidFn } from '../utils/types';

export function pick([path, action]: [string, AnyVoidFn]) {
  return function(event: Event) {
    let value = get(event, path);

    if (!action) {
      return value;
    }

    action(value);
  };
}

export default helper(pick);
