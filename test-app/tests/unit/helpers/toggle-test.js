import { toggle } from 'ember-composable-helpers/helpers/toggle';
import { module, test } from 'qunit';

module('Unit | Helper | toggle', function() {
  test('it toggles the property', function(assert) {
    let jimBob = { isAlive: false };
    let action = toggle(['isAlive', jimBob]);
    action();

    assert.true(jimBob.isAlive, 'should be true');
  });

  test('it correctly toggles non-boolean falsey values', function(assert) {
    let jimBob = { isAlive: undefined };
    let action = toggle(['isAlive', jimBob]);
    action();

    assert.true(jimBob.isAlive, 'should be true');
  });

  test('it correctly toggles non-boolean truthy values', function(assert) {
    let jimBob = { isAlive: {} };
    let action = toggle(['isAlive', jimBob]);
    action();

    assert.false(jimBob.isAlive, 'should be false');
  });
});
