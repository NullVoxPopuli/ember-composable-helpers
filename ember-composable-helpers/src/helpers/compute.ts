import { helper } from '@ember/component/helper';
import type { AnyFn } from '../utils/types';

/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Calls a function
 */
export function compute<Action extends AnyFn>([action, ...params]: [action: Action, ...params: Parameters<Action>]): ReturnType<Action> {
  return action(...params);
}

export default helper(compute);
