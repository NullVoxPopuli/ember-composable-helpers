import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';

module('Integration | Helper | pick', function(hooks) {
  setupRenderingTest(hooks);

  // eslint-disable-next-line qunit/require-expect
  test("Works when used with {{on}} modifier and pipe", async function(assert) {
    assert.expect(1);

    this.set('click', function(value) {
      assert.strictEqual(value, 'pizza party', 'The action receives the correct value');
    })

    await render(hbs`
      <input
        id="test-input"
        value="pizza party"
        {{on 'click' (pipe (pick 'target.value') this.click)}}
      />
    `);

    await click('#test-input');
  });

  // eslint-disable-next-line qunit/require-expect
  test("Shorthand works when used with {{on}} modifier and optional action is provided", async function(assert) {
    assert.expect(1);

    this.set('click', function(value) {
      assert.strictEqual(value, 'pizza party', 'The action receives the correct value');
    })

    await render(hbs`
      <input
        id="test-input"
        value="pizza party"
        {{on 'click' (pick 'target.value' this.click)}}
      />
    `);

    await click('#test-input');
  });
});
