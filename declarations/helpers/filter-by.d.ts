export declare function filterBy<T extends object, K extends keyof T>([byPath, value, array,]: [K, T[K] | T[] | undefined, T[]]): T[];
declare const _default: abstract new <T extends object, K extends keyof T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T[K] | T[] | undefined, T[]];
        Named: object;
    };
    Return: T[];
}>;
export default _default;
//# sourceMappingURL=filter-by.d.ts.map