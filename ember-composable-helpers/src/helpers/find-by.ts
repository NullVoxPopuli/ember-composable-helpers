import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import asArray from '../utils/as-array.ts';

/**
 * Finds the first item of an array whose `path` strictly equals `value`.
 *
 * `null` and `undefined` are treated as an empty array, so the result is
 * `undefined` rather than an error while the array is not yet available.
 *
 * @example
 * ```hbs
 * {{#let (find-by "id" 1 this.users) as |user|}}{{user.name}}{{/let}}
 * ```
 *
 * @example
 * ```ts
 * findBy(['id', 1, [{ id: 1 }, { id: 2 }]]); // { id: 1 }
 * findBy(['id', 1, undefined]); // undefined
 * ```
 */
export function findBy<T, K extends keyof T>([byPath, value, array]: [
  K,
  T[K],
  T[] | null | undefined,
]) {
  if (isEmpty(byPath)) {
    return undefined;
  }

  return asArray(array).find((item) => get(item, String(byPath)) === value);
}

export default helper(findBy);
