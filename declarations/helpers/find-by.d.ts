export declare function findBy<T>([byPath, value, array]: [keyof T, T[keyof T], T[]]): T | undefined;
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [keyof T, T[keyof T], T[]];
        Named: object;
    };
    Return: T | undefined;
}>;
export default _default;
//# sourceMappingURL=find-by.d.ts.map