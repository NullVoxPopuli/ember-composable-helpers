import { isArray } from '@ember/array';
import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array.js';

function includes(needleOrNeedles, haystack) {
  if (!isArray(haystack)) {
    return false;
  }
  const needles = isArray(needleOrNeedles) ? needleOrNeedles : [needleOrNeedles];
  const haystackAsEmberArray = asArray(haystack);
  return asArray(needles).every(needle => {
    return haystackAsEmberArray.includes(needle);
  });
}
var includes$1 = helper(function ([needle, haystack]) {
  return includes(needle, haystack);
});

export { includes$1 as default, includes };
//# sourceMappingURL=includes.js.map
