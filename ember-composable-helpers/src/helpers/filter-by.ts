import { helper } from '@ember/component/helper';
import { isArray as isEmberArray } from '@ember/array';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import isEqual from '../utils/is-equal.ts';
import asArray from '../utils/as-array.ts';

/**
 * Filters an array by a property of its items. Accepts two forms:
 *
 * - `[path, value, array]`: keeps items whose `path` equals `value`. If `value`
 *   is a function, it is called with the property and the item is kept when it
 *   returns truthy.
 * - `[path, array]`: with no value, keeps items whose `path` is truthy.
 *
 * @example
 * ```hbs
 * {{#each (filter-by "active" true this.users) as |user|}}...{{/each}}
 * {{#each (filter-by "active" this.users) as |user|}}...{{/each}}
 * ```
 *
 * @example
 * ```ts
 * const items = [{ active: true }, { active: false }];
 * filterBy(['active', true, items]); // [{ active: true }]
 * filterBy(['active', items]); // [{ active: true }]
 * ```
 */
export function filterBy<T extends object, K extends keyof T>(
  positional: [K, T[K] | T[] | undefined, T[]] | [K, T[]],
) {
  const args = positional as [K, T[K] | T[] | undefined, T[]];
  const byPath = args[0];
  let value = args[1];
  let array = args[2];
  let isPresent = true;
  if (!isEmberArray(array) && isEmberArray(value)) {
    array = value as T[];
    value = undefined;
    isPresent = false;
  }

  array = asArray(array);

  if (isEmpty(byPath) || isEmpty(array)) {
    return [];
  }

  let filterFn;

  if (isPresent) {
    if (typeof value === 'function') {
      filterFn = (item: T) => value(get(item, byPath));
    } else {
      filterFn = (item: T) => isEqual(get(item, byPath), value);
    }
  } else {
    filterFn = (item: T) => !!get(item, byPath);
  }

  return array.filter(filterFn);
}

export default helper(filterBy);
