import { previous } from 'ember-composable-helpers/helpers/previous';
import { module, test } from 'qunit';

module('Unit | Helper | previous', function() {
  test('it returns the current value if it is the first element in the array', function(assert) {
    let result = previous(1, [1, 2, 3, 4]);

    assert.strictEqual(result, 1, 'should return 1');
  });

  test('it returns `null` if the given value is not in the array', function(assert) {
    let result = previous(5, [1, 2, 3, 4]);

    // eslint-disable-next-line qunit/no-assert-equal -- FIXME: This doesn't actually return null!
    assert.equal(result, null, 'should return `null`');
  });
});
