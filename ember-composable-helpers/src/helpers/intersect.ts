import { helper } from '@ember/component/helper';
import { isArray as isEmberArray } from '@ember/array';
import asArray from '../utils/as-array.ts';

export function intersect<T>([...arrays]: [...T[]]) {
  const confirmedArrays = asArray(arrays).map((array) => {
    return isEmberArray(array) ? (array as T[]) : [];
  });
  // copied from https://github.com/emberjs/ember.js/blob/315ec6472ff542ac714432036cc96fe4bd62bd1f/packages/%40ember/object/lib/computed/reduce_computed_macros.js#L1063-L1100
  const results = confirmedArrays.pop()!.filter((candidate) => {
    for (let i = 0; i < confirmedArrays.length; i++) {
      let found = false;
      const array = confirmedArrays[i] as T[];
      for (let j = 0; j < array.length; j++) {
        if (array[j] === candidate) {
          found = true;
          break;
        }
      }

      if (found === false) {
        return false;
      }
    }

    return true;
  });

  return results;
}

export default helper(intersect);
