import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array.ts';

/**
 * Filters an array with a callback, like `Array#filter`.
 *
 * The callback can be any function: only whether its result is truthy matters,
 * so it does not need to return a boolean or be a type predicate. It receives
 * the item, its index and the array.
 *
 * @example
 * ```hbs
 * {{#each (filter this.isAdult this.people) as |person|}}...{{/each}}
 * ```
 *
 * @example
 * ```ts
 * filter([(n: number) => n > 1, [1, 2, 3]]); // [2, 3]
 * filter([(item: { name: string }) => item.name, people]); // people with a name
 * ```
 */
export function filter<T>([callback, array]: [
  (value: T, index: number, array: T[]) => unknown,
  T[],
]) {
  if (isEmpty(callback) || !array) {
    return [];
  }

  return asArray(array).filter(callback);
}

export default helper(filter);
