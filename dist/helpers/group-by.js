import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import asArray from '../utils/as-array.js';

function groupBy([byPath, array]) {
  let groups = {};
  asArray(array).forEach(item => {
    let groupName = get(item, byPath);
    let group = groups[groupName];
    if (!Array.isArray(group)) {
      group = [];
      groups[groupName] = group;
    }
    group.push(item);
  });
  return groups;
}
var groupBy$1 = helper(groupBy);

export { groupBy$1 as default, groupBy };
//# sourceMappingURL=group-by.js.map
