import { hbs } from "ember-cli-htmlbars";
import { A as emberArray } from "@ember/array";
import { run } from "@ember/runloop";
import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";

module("Integration | Helper | {{map-by}}", function (hooks) {
  setupRenderingTest(hooks);

  test("It maps by value", async function (assert) {
    this.set(
      "array",
      emberArray([{ name: "a" }, { name: "b" }, { name: "c" }]),
    );

    await render(hbs`
      {{~#each (map-by 'name' this.array) as |name|~}}
        {{~name~}}
      {{~/each~}}
    `);

    assert.dom().hasText("abc", "name property is mapped");
  });

  test("It watches for changes", async function (assert) {
    let array = emberArray([{ name: "a" }, { name: "b" }, { name: "c" }]);

    this.set("array", array);

    await render(hbs`
      {{~#each (map-by 'name' this.array) as |name|~}}
        {{~name~}}
      {{~/each~}}
    `);

    run(() => array.pushObject({ name: "d" }));

    assert.dom().hasText("abcd", "d is added");
  });

  test("It watches for changes to byPath", async function (assert) {
    let array = emberArray([
      { name: "a", x: 1 },
      { name: "b", x: 2 },
      { name: "c", x: 3 },
    ]);

    this.set("array", array);
    this.set("property", "name");

    await render(hbs`
      {{~#each (map-by this.property this.array) as |name|~}}
        {{~name~}}
      {{~/each~}}
    `);

    this.set("property", "x");

    assert.dom().hasText("123", "123 is displayed");
  });

  test("It allows null arrays", async function (assert) {
    this.set("array", null);

    await render(hbs`
      {{~#each (map-by 'name' this.array) as |name|~}}
        {{~name~}}
      {{~/each~}}
    `);

    assert
      .dom()
      .hasText("", "this is all that will render, but there is no error");
  });

  test("It allows undefined arrays", async function (assert) {
    this.set("array", undefined);

    await render(hbs`
      {{~#each (map-by 'name' this.array) as |name|~}}
        {{~name~}}
      {{~/each~}}
    `);

    assert
      .dom()
      .hasText("", "this is all that will render, but there is no error");
  });
});
