import { helper } from '@ember/component/helper';
import type { AnyFn } from '../utils/types';

export function optional<Fn extends AnyFn>([action]: [fn: Fn]): Fn;
export function optional<Fn extends AnyFn>([action]: [fn: Fn | undefined]): Fn | (<Arg>(arg: Arg) => Arg);
export function optional([action]: [fn?: undefined]): <Arg>(arg: Arg) => Arg;
export function optional<Fn extends AnyFn>([action]: [fn?: Fn | undefined]): Fn | (<Arg>(arg: Arg) => Arg) {
  if (typeof action === 'function') {
    return action;
  }

  return <Arg>(i: Arg) => i;
}

export default helper(optional);
