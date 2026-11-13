import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import type { AnyVoidFn } from '../utils/types';

/**
 * Creates a function that reads `path` from its argument, typically an event.
 *
 * With an `action`, the action is called with the picked value. Without one,
 * the picked value is returned, which is useful as a step of `pipe`.
 *
 * @example
 * ```hbs
 * <input {{on "input" (pick "target.value" this.setName)}} />
 * <input {{on "input" (pipe (pick "target.value") this.setName)}} />
 * ```
 *
 * @example
 * ```ts
 * pick(['target.value', setName]); // calls setName(event.target.value)
 * pick(['target.value']); // returns event.target.value
 * ```
 */
export function pick<T extends Event | Record<string, unknown>>([
  path,
  action,
]: [string, AnyVoidFn?]) {
  return function (obj: T) {
    const value = get(obj, path);

    if (!action) {
      return value;
    }

    action(value);
  };
}

export default helper(pick);
