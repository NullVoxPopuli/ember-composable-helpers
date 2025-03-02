import { get } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { helper } from '@ember/component/helper';
import EmberArray from '@ember/array';
import asArray from '../utils/as-array.ts';

const collator = new Intl.Collator(undefined, {
  sensitivity: 'base',
});

function normalizeToBoolean(val: boolean | number | void): boolean {
  if (typeof val === 'boolean') {
    return val;
  }

  if (typeof val === 'number') {
    if (val > 0) {
      return false;
    } else if (val < 0) {
      return true;
    }
  }

  return val as unknown as boolean;
}

function safeValueForKey(ctx: unknown, key: string) {
  if (ctx === null || ctx === undefined) {
    return ctx;
  }
  return get(ctx, key);
}

function sortDesc<T>(key: string, a: T, b: T) {
  if (isEmpty(key)) {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aValue = safeValueForKey(a, key) as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bValue = safeValueForKey(b, key) as any;

  const isANullable = typeof aValue == 'undefined' || aValue === null;
  const isBNullable = typeof bValue == 'undefined' || bValue === null;

  if (isANullable && isBNullable) {
    //both values are nullable
    return 0;
  }

  if (isBNullable) {
    // keep bValue last
    return -1;
  }
  if (isANullable) {
    // put aValue last
    return 1;
  }

  if (aValue.toLowerCase && bValue.toLowerCase) {
    return collator.compare(bValue, aValue);
  }

  if (aValue < bValue) {
    return 1;
  } else if (aValue > bValue) {
    return -1;
  }

  return 0;
}

function sortAsc<T>(key: string, a: T, b: T) {
  if (isEmpty(key)) {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aValue = safeValueForKey(a, key) as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bValue = safeValueForKey(b, key) as any;

  const isANullable = typeof aValue == 'undefined' || aValue === null;
  const isBNullable = typeof bValue == 'undefined' || bValue === null;

  if (isANullable && isBNullable) {
    //both values are nullable
    return 0;
  }

  if (isBNullable) {
    // keep bValue last
    return -1;
  }
  if (isANullable) {
    // put aValue last
    return 1;
  }

  if (aValue.toLowerCase && bValue.toLowerCase) {
    return collator.compare(aValue, bValue);
  }

  if (aValue < bValue) {
    return -1;
  } else if (aValue > bValue) {
    return 1;
  }

  return 0;
}

class SortBy<T> {
  array: T[];

  constructor(...args: [T[] | EmberArray<T>]) {
    let [array] = args;
    if (typeof (array as EmberArray<T>).toArray === 'function') {
      array = (array as EmberArray<T>).toArray();
    }

    this.array = [...(array as T[])];
  }

  comparator(key: string | ((a: T, b: T) => number)) {
    return typeof key === 'function' ? key : this.defaultSort(key);
  }

  defaultSort(sortKey: string) {
    let func = sortAsc;
    if (sortKey.match(':desc')) {
      func = sortDesc;
    }

    return (a: T, b: T) => func(sortKey.replace(/:desc|:asc/, ''), a, b);
  }
}

/**
 * best O(n); worst O(n^2)
 * If we feel like swapping with something more performant like QuickSort or MergeSort
 * then it should be easy
 *
 * @class BubbleSort
 * @extends SortBy
 */
class BubbleSort<T> extends SortBy<T> {
  perform(keys: string[] = []) {
    let swapped = false;

    let compFuncs = keys.map((key) => this.comparator(key));
    let compFunc = (a: T, b: T) => {
      for (let i = 0; i < compFuncs.length; i += 1) {
        let result = compFuncs[i]?.(a, b);
        if (result === 0) {
          continue;
        }
        return result;
      }
      return 0;
    };
    for (let i = 1; i < this.array.length; i += 1) {
      for (let j = 0; j < this.array.length - i; j += 1) {
        let shouldSwap = normalizeToBoolean(
          compFunc(this.array[j + 1]!, this.array[j]!),
        );
        if (shouldSwap) {
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1]!,
            this.array[j]!,
          ];

          swapped = true;
        }
      }

      // no need to continue sort if not swapped in any inner iteration
      if (!swapped) {
        return this.array;
      }
    }
  }
}

export function sortBy<T, K extends string | `${string}:desc`>(
  params: [...K[], T[]],
) {
  // slice params to avoid mutating the provided params
  let sortParams = params.slice();
  let array = asArray(sortParams.pop() as T[]);
  let sortKeys = sortParams as K[];

  if (!array || !sortKeys || sortKeys.length === 0) {
    return [];
  }

  if (sortKeys.length === 1 && Array.isArray(sortKeys[0])) {
    sortKeys = sortKeys[0];
  }

  const sortKlass = new BubbleSort(array);
  sortKlass.perform(sortKeys);
  return sortKlass.array;
}

export default helper(sortBy);
