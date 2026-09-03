import { helper } from '@ember/component/helper';

function fromEntries([entries]) {
  if (!entries) {
    return entries;
  }
  return Object.fromEntries(entries);
}
var fromEntries_default = helper(fromEntries);

export { fromEntries_default as default, fromEntries };
//# sourceMappingURL=from-entries.js.map
