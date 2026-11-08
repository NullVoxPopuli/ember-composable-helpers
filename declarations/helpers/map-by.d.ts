export declare function mapBy<T extends object, K extends keyof T>([byPath, array]: [
    K,
    T[]
]): T[K][];
declare const _default: abstract new <T extends object, K extends keyof T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T[]];
        Named: object;
    };
    Return: T[K][];
}>;
export default _default;
//# sourceMappingURL=map-by.d.ts.map