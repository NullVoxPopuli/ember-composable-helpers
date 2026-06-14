export declare function toggle<T>([prop, obj, ...values]: [
    keyof T,
    T,
    ...T[keyof T][]
]): () => boolean | NonNullable<T[keyof T]>;
declare const _default: abstract new <T>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [keyof T, T, ...T[keyof T][]];
        Named: object;
    };
    Return: () => boolean | NonNullable<T[keyof T]>;
}>;
export default _default;
//# sourceMappingURL=toggle.d.ts.map