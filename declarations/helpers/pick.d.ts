import type { AnyVoidFn } from '../utils/types';
export declare function pick<T extends Event | Record<string, unknown>>([path, action,]: [string, AnyVoidFn]): (obj: T) => unknown;
declare const _default: abstract new <T extends Event | Record<string, unknown>>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [string, AnyVoidFn];
        Named: object;
    };
    Return: (obj: T) => unknown;
}>;
export default _default;
//# sourceMappingURL=pick.d.ts.map