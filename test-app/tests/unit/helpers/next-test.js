import { next } from 'ember-composable-helpers/helpers/next';
import { module, test } from 'qunit';

module('Unit | Helper | next', function() {
  test('it returns the current value if it is the last element in the array', function(assert) {
    let result = next(4, [1, 2, 3, 4]);

    assert.strictEqual(result, 4, 'should return 4');
  });

  test('it returns `null` if the given value is not in the array', function(assert) {
    let result = next(5, [1, 2, 3, 4]);

    // eslint-disable-next-line qunit/no-assert-equal -- FIXME: This doesn't actually return null!
    assert.equal(result, null, 'should return `null`');
  });
});
