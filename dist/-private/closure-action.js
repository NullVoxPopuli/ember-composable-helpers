import Ember from 'ember';

/**
 * Note that this file *at all* is deprecated in ember-source v6,
 * and will not work in v7 as this import is being removed in v7.
 * Do not use closure-action with ember-composable-helpers.
 */
const {
  __loader
} = Ember;
let ClosureActionModule = {
  ACTION: null
};
if (__loader && 'ember-htmlbars/keywords/closure-action' in __loader.registry) {
  ClosureActionModule = __loader.require('ember-htmlbars/keywords/closure-action');
} else if (__loader && 'ember-routing-htmlbars/keywords/closure-action' in __loader.registry) {
  ClosureActionModule = __loader.require('ember-routing-htmlbars/keywords/closure-action');
}
var ACTION = ClosureActionModule.ACTION;

export { ACTION as default };
//# sourceMappingURL=closure-action.js.map
