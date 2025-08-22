export declare function map<T>([callback, array]: [
    (value: T, index: number, array: T[]) => T,
    T[]
]): T[];
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [(value: T, index: number, array: T[]) => T, T[]];
        Named: object;
    };
    Return: T[];
}>;
export default _default;
//# sourceMappingURL=map.d.ts.map