export declare function filter<T>([callback, array]: [
    (value: T, index: number, array: T[]) => value is T,
    T[]
]): T[];
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [(value: T, index: number, array: T[]) => value is T, T[]];
        Named: object;
    };
    Return: T[];
}>;
export default _default;
//# sourceMappingURL=filter.d.ts.map