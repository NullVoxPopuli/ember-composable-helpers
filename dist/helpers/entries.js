import { helper } from '@ember/component/helper';

function entries([object]) {
  if (!object) {
    return object;
  }
  return Object.entries(object);
}
var entries_default = helper(entries);

export { entries_default as default, entries };
//# sourceMappingURL=entries.js.map
