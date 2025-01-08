import type { AnyVoidFn } from '../utils/types';
/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Invokes a method on an object, or on each object of an array
 */
export declare function invoke<K extends PropertyKey, T extends Record<K, AnyVoidFn>>([methodName, ...args]: [K, T, ...unknown[]]): () => void;
declare const _default: abstract new <K extends PropertyKey, T extends Record<K, AnyVoidFn>>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T, ...unknown[]];
        Named: object;
    };
    Return: () => void;
}>;
export default _default;
//# sourceMappingURL=invoke.d.ts.map