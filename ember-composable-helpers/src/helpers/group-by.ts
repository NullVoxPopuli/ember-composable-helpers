import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import asArray from '../utils/as-array.ts';

export function groupBy<T, K extends keyof T & string>([byPath, array]: [K, T[]]) {
  const groups: { [key: string]: T[] } = {};

  asArray(array).forEach((item) => {
    const groupName = get(item, byPath) as string;
    let group = groups[groupName];

    if (!Array.isArray(group)) {
      group = [];
      groups[groupName] = group;
    }

    group.push(item);
  });

  return groups;
}

export default helper(groupBy);
