import isEqual from '../utils/is-equal.ts';

export default function getIndex<T>(
  array: T[],
  currentValue: T,
  useDeepEqual: boolean,
) {
  let needle = currentValue;

  if (useDeepEqual) {
    needle = array.find((object) => {
      return isEqual(object, currentValue, useDeepEqual);
    }) as T;
  }

  let index = (array || []).indexOf(needle);

  return index >= 0 ? index : null;
}
