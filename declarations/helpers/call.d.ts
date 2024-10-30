/**
 * Calls a function passed within a template and returns its value.
 * In order to pass arguments to the function being called, you must
 * curry the function using the `fn` helper.
 *
 ```example
    <div data-metrics={{call (fn this.myMetrics (hash item=@item))}}
  ```
 *
 * @function apply
 * @param {Array<Function>} fn - The function to be called
 * @param {*=} thisArg - An optional `this` context
 */
export declare function call([fn, thisArg]: [(...args: never[]) => unknown, unknown?]): unknown;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [(...args: never[]) => unknown, unknown?];
        Named: object;
    };
    Return: unknown;
}>;
export default _default;
//# sourceMappingURL=call.d.ts.map