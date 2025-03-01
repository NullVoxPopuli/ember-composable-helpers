import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';

module('Integration | Helper | {{pipe-action}}', function(hooks) {
  setupRenderingTest(hooks);

  test('it can be used as a closure action', async function(assert) {
    let value = 0;

    this.add = (x, y) => x + y;
    this.square = (x) => x * x;
    this.squareRoot = (x) => value = Math.sqrt(x);

    await render(hbs`
      {{#let (pipe-action this.add this.square this.squareRoot) as |calculate|}}
        <button type="button" {{on "click" (fn calculate 2 4)}}>
          Calculate
        </button>
      {{/let}}
    `);

    assert.strictEqual(value, 0, 'precond - should return 0');

    await click('button');

    assert.strictEqual(value, 6, 'should return 6');
  });
});
