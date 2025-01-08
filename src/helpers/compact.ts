import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { isArray } from '@ember/array';
export function compact<T>([value]: [T[]]): T[] {
  let array;
  if (Array.isArray(value) || isArray(value)) {
    array = value;
  } else {
    array = [value];
  }

  return array.filter(item => isPresent(item));
}

export default helper(compact);
