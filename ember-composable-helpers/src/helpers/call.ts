import { helper } from "@ember/component/helper";

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
 * @param fn The function to be called
 * @param thisArg An optional `this` context
 */
export function call<ThisArg, Fn extends ((this: ThisArg) => unknown)>([fn, thisArg]: [fn: Fn, thisArg: ThisArg]): ReturnType<Fn>;
export function call<Fn extends ((this: never) => unknown)>([fn]: [fn: Fn]): ReturnType<Fn>;
export function call([fn, thisArg]: [fn?: undefined, thisArg?: unknown]): void;
export function call([fn, thisArg]: [fn?: (() => unknown) | undefined, thisArg?: unknown]): unknown {
  if (fn) {
    if (thisArg) {
      return fn.apply(thisArg);
    } else {
      return fn();
    }
  }
}

export default helper(call);
