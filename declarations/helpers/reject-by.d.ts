export declare function rejectBy<T extends object, K extends keyof T>([byPath, value, array,]: [K, T | ((value: T[K]) => boolean) | undefined, T[]] | [K, T[]]): T[];
declare const _default: abstract new <T extends object, K extends keyof T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K, T | ((value: T[K]) => boolean) | undefined, T[]] | [K, T[]];
        Named: object;
    };
    Return: T[];
}>;
export default _default;
//# sourceMappingURL=reject-by.d.ts.map