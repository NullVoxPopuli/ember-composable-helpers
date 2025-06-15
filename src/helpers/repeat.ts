import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export function repeat<Args extends [number, unknown] | [number]>([
  length,
  value,
]: Args): Args extends [number, infer T] ? T[] : undefined[];
export function repeat<T>([length, value]: [number, T?] | [number]): Array<
  T | undefined
> {
  if (typeOf(length) !== 'number') {
    return [value];
  }
  return Array.apply(null, { length } as []).map(() => value); // eslint-disable-line
}

export default helper(repeat);
