export declare function sortBy<T, K extends string | `${string}:desc`>(params: [...K[], T[]]): T[];
declare const _default: abstract new <T, K extends string | `${string}:desc`>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [...K[], T[]];
        Named: object;
    };
    Return: T[];
}>;
export default _default;
//# sourceMappingURL=sort-by.d.ts.map