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

export default function optionalHelper<Fn extends AnyFn>(action: Fn): Fn;
export default function optionalHelper<Fn extends AnyFn>(action: Fn | undefined): Fn | (<Arg>(arg: Arg) => Arg);
export default function optionalHelper(action?: undefined): <Arg>(arg: Arg) => Arg;
export default function optionalHelper(action?: AnyFn) {
  return optional([action])
}
