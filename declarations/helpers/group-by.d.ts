export declare function groupBy<T, K extends keyof T & string>([byPath, array]: [
    K,
    T[]
]): {
    [key: string]: T[];
};
declare const _default: abstract new <T, K extends keyof T & string>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T[]];
        Named: object;
    };
    Return: {
        [key: string]: T[];
    };
}>;
export default _default;
//# sourceMappingURL=group-by.d.ts.map