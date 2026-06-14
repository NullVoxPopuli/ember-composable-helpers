import type { AnyFn } from '../utils/types';
export declare function optional<Fn extends AnyFn>([action]: [fn: Fn]): Fn;
export declare function optional<Fn extends AnyFn>([action]: [fn: Fn | undefined]): Fn | (<Arg>(arg: Arg) => Arg);
export declare function optional([action]: [fn?: undefined]): <Arg>(arg: Arg) => Arg;
export default function optionalHelper<Fn extends AnyFn>(action: Fn): Fn;
export default function optionalHelper<Fn extends AnyFn>(action: Fn | undefined): Fn | (<Arg>(arg: Arg) => Arg);
export default function optionalHelper(action?: undefined): <Arg>(arg: Arg) => Arg;
//# sourceMappingURL=optional.d.ts.map