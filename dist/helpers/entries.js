import { helper } from '@ember/component/helper';

function entries([object]) {
  if (!object) {
    return object;
  }
  return Object.entries(object);
}
var entries$1 = helper(entries);

export { entries$1 as default, entries };
//# sourceMappingURL=entries.js.map
