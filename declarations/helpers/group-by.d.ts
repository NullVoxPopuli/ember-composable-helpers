export declare function groupBy<T>([byPath, array]: [string, T[]]): {
    [key: string]: T[];
};
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [string, T[]];
        Named: object;
    };
    Return: {
        [key: string]: T[];
    };
}>;
export default _default;
//# sourceMappingURL=group-by.d.ts.map