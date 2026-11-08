export declare function invokeFunction<T>(acc: T, curr: (...args: unknown[]) => void): void | Promise<void>;
export declare function pipe(actions?: [...((...args1: unknown[]) => unknown)[]]): (...args: [...unknown[]]) => unknown;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: unknown[];
        Named: object;
    };
    Return: unknown;
}>;
export default _default;
//# sourceMappingURL=pipe.d.ts.map