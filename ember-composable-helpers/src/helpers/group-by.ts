import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import asArray from '../utils/as-array';

export function groupBy<T>([byPath, array]: [string, T[]]) {
  let groups: { [key: string]: T[] } = {};

  asArray(array).forEach((item) => {
    let groupName = get(item, byPath) as string;
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
