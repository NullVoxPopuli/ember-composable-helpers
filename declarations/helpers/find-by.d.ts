export declare function findBy<T, K extends keyof T>([byPath, value, array]: [
    K,
    T[K],
    T[]
]): T | undefined;
declare const _default: abstract new <T, K extends keyof T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T[K], T[]];
        Named: object;
    };
    Return: T | undefined;
}>;
export default _default;
//# sourceMappingURL=find-by.d.ts.map