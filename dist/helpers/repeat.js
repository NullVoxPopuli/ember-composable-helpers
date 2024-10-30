import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

function repeat([length, value]) {
  if (typeOf(length) !== 'number') {
    return [value];
  }
  return Array.apply(null, {
    length
  }).map(() => value); // eslint-disable-line
}
var repeat$1 = helper(repeat);

export { repeat$1 as default, repeat };
//# sourceMappingURL=repeat.js.map
