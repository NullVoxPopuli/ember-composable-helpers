import type { AnyVoidFn } from '../utils/types';
export declare function pick([path, action]: [string, AnyVoidFn]): (event: Event) => unknown;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [string, AnyVoidFn];
        Named: object;
    };
    Return: (event: Event) => unknown;
}>;
export default _default;
//# sourceMappingURL=pick.d.ts.map