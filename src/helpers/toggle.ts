import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { set } from '@ember/object';
import { isPresent } from '@ember/utils';

function nextIndex(length: number, currentIdx: number) {
  if (currentIdx === -1 || currentIdx + 1 === length) {
    return 0;
  }

  return currentIdx + 1;
}

export function toggle<T>([prop, obj, ...values]: [
  keyof T,
  T,
  ...T[keyof T][],
]) {
  return function () {
    let currentValue = get(obj as object, prop as string);

    if (isPresent(values)) {
      let currentIdx = values.indexOf(currentValue as T[keyof T]);
      let nextIdx = nextIndex(values.length, currentIdx);

      return set(obj as object, prop as string, values[nextIdx]!);
    }

    return set(obj as object, prop as string, !currentValue);
  };
}

export default helper(toggle);
