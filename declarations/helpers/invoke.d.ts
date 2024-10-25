export declare function invoke<K extends PropertyKey, T extends Record<K, (...args: any[]) => void>>([methodName, ...args]: [K, T, ...unknown[]]): () => void;
declare const _default: abstract new <K extends PropertyKey, T extends Record<K, (...args: any[]) => void>>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T, ...unknown[]];
        Named: object;
    };
    Return: () => void;
}>;
export default _default;
//# sourceMappingURL=invoke.d.ts.map