import { dec } from 'ember-composable-helpers/helpers/dec';
import { module, test } from 'qunit';

module('Unit | Helper | dec', function() {
  test('it decrements a value', function(assert) {
    let result = dec([2]);

    assert.strictEqual(result, 1, 'should equal 1');
  });

  test('it decrements a value by step integer', function(assert) {
    let result = dec([2, 3]);

    assert.strictEqual(result, 1, 'should equal 1');
  });

  test('it decrements a value by step float', function(assert) {
    let result = dec([2.5, 3]);

    assert.strictEqual(result, 0.5, 'should equal 0.5');
  });
});
