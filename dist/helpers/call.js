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

function call([fn, thisArg]) {
  if (fn) {
    if (thisArg) {
      return fn.apply(thisArg);
    } else {
      return fn();
    }
  }
}
function callHelper(fn, thisArg) {
  // @ts-expect-error -- This is fine, but TS doesn't like it with the overrides
  return call([fn, thisArg]);
}

export { call, callHelper as default };
//# sourceMappingURL=call.js.map
