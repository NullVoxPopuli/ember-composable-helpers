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
var repeat_default = helper(repeat);

export { repeat_default as default, repeat };
//# sourceMappingURL=repeat.js.map
