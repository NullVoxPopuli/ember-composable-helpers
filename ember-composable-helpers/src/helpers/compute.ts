import { helper } from '@ember/component/helper';
import type { AnyFn } from '../utils/types';

export function compute<Action extends AnyFn> ([action, ...params]: [action: Action, ...params: Parameters<Action>]): ReturnType<Action> {
  return action(...params);
}

export default helper(compute);
