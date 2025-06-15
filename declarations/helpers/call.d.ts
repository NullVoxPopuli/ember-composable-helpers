/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Calls a function passed within a template and returns its value.
 * In order to pass arguments to the function being called, you must
 * curry the function using the `fn` helper.
 *
 ```example
    <div data-metrics={{call (fn this.myMetrics (hash item=@item))}}
  ```
 *
 * @function apply
 * @param fn The function to be called
 * @param thisArg An optional `this` context
 */
export declare function call<ThisArg, Fn extends (this: ThisArg) => unknown>([fn, thisArg,]: [fn: Fn, thisArg: ThisArg]): ReturnType<Fn>;
export declare function call<Fn extends (this: never) => unknown>([fn]: [
    fn: Fn
]): ReturnType<Fn>;
export declare function call([fn, thisArg]: [fn?: undefined, thisArg?: unknown]): void;
export default function callHelper<ThisArg, Fn extends (this: ThisArg) => unknown>(fn: Fn, thisArg: ThisArg): ReturnType<Fn>;
export default function callHelper<Fn extends (this: never) => unknown>(fn: Fn): ReturnType<Fn>;
export default function callHelper(fn?: undefined, thisArg?: unknown): void;
//# sourceMappingURL=call.d.ts.map