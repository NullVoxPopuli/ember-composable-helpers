import { helper } from '@ember/component/helper';

function fromEntries([entries]) {
  if (!entries) {
    return entries;
  }
  return Object.fromEntries(entries);
}
var fromEntries$1 = helper(fromEntries);

export { fromEntries$1 as default, fromEntries };
//# sourceMappingURL=from-entries.js.map
