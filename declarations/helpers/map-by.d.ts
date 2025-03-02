export declare function mapBy<T extends object>([byPath, array]: [keyof T, T[]]): T[keyof T][];
declare const _default: abstract new <T extends object>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [keyof T, T[]];
        Named: object;
    };
    Return: T[keyof T][];
}>;
export default _default;
//# sourceMappingURL=map-by.d.ts.map