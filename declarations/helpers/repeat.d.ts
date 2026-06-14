export declare function repeat<Args extends [number, unknown] | [number]>([length, value,]: Args): Args extends [number, infer T] ? T[] : undefined[];
declare const _default: abstract new <Args extends [number, unknown] | [number]>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: Args;
        Named: object;
    };
    Return: Args extends [number, infer T] ? T[] : undefined[];
}>;
export default _default;
//# sourceMappingURL=repeat.d.ts.map