import { helper } from '@ember/component/helper';

function append([...arrays]) {
  return [].concat(...arrays);
}
var append$1 = helper(append);

export { append, append$1 as default };
//# sourceMappingURL=append.js.map
