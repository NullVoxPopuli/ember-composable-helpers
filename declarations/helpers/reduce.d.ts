export declare function reduce<T>([callback, initialValue, array]: [
    (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
    T,
    T[]
]): never[] | T;
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, T, T[]];
        Named: object;
    };
    Return: never[] | T;
}>;
export default _default;
//# sourceMappingURL=reduce.d.ts.map