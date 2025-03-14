# ember-composable-helpers

A modern fork of the original utility library.

> [!TIP]
> If you're starting a brand new project, you probably don't need (or want) this library. You can use regular JS functions in gjs and gts files.


template tag `gts/gjs` example:

```gjs
// note that importing from this file includes *all* helpers
import { mapBy, pipe, mut } from '@nullvoxpopuli/ember-composable-helpers';

<template>
  {{#each (mapBy "fullName" users) as |fullName|}}
    <input type="text" value={{fullName}} onchange={{mut newName}}>
    <button {{on 'click' (pipe updateFullName saveUser) newName}}>
      Update and save {{fullName}} to {{newName}}
    </button>
  {{/each}}
</template>
```

If you only want one (or a few) utilit(y|ies), you may be interested in the individual exports instead:
```js
import { mapBy } from '@nullvoxpopuli/ember-composable-helpers/helpers/map-by';
```
these are all the same paths as provided by the original `ember-composable-helpers`

class example:

```hbs
{{#each (map-by "fullName" users) as |fullName|}}
  <input type="text" value={{fullName}} onchange={{action (mut newName)}}>
  <button {{on 'click' (pipe updateFullName saveUser) newName}}>
    Update and save {{fullName}} to {{newName}}
  </button>
{{/each}}
```

To install:

**Ember 3.28+:**

```no-highlight
npm add @nullvoxpopuli/ember-composable-helpers
```

To use in an existing project, to replace the original [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers):

under webpack, configure an alias:
```js
resolve: {
  alias: {
    "ember-composable-helpers": "@nullvoxpopuli/ember-composable-helpers",
  },
},
```

under classic builds, using ember-auto-import, the alias would be configured this way:

```js
// ember-cli-build.js
autoImport: {
  alias: {
    "ember-composable-helpers": "@nullvoxpopuli/ember-composable-helpers",
  },
},
```

Note that under auto-import, all helpers will be included.
Under embroider, when static helpers/components are turned on, only what you use will be in the build output.

For Assessing impact, the whole library is 38K (no min, no gzip or brotly)
```bash
❯ du --depth 1 --reverse --apparent-size --no-percent-bars --filter ".js$" ember-composable-helpers/dist/
  38K └─┬ dist
  26K   ├── helpers
 4.4K   ├── utils
 3.8K   ├── _app_
 2.5K   ├── index.js
1003B   └── -private
```

Running thruogh terser, the whole library becames **24K**
```bash
❯ du --depth 1 --reverse --apparent-size --no-percent-bars --filter ".min$" ember-composable-helpers/dist/
 24K └─┬ dist
 15K   ├── helpers
3.5K   ├── _app_
2.6K   ├── utils
2.2K   ├── index.js.min
658B   └── -private
```

And then running through gzip (build -> min -> gzip)
```bash
❯ du --depth 1 --reverse --apparent-size --no-percent-bars --filter ".gz$" ember-composable-helpers/dist/
 17K └─┬ dist
 10K   ├── helpers
4.7K   ├── _app_
1.3K   ├── utils
443B   ├── -private
416B   └── index.js.min.gzip
```

And then running through brotly (build -> min -> brotli)
```bash
❯  du --depth 1 --reverse --apparent-size --no-percent-bars --filter ".br$" ember-composable-helpers/dist/
 13K └─┬ dist
8.3K   ├── helpers
3.4K   ├── _app_
1.0K   ├── utils
370B   ├── index.js.min.br
295B   └── -private
```



## Table of Contents
  - [Compatability](#compatibility)
  - [Configuration](#configuration)
  - [Argument ordering](#argument-ordering)
  - [Upgrade Guide](#upgrade-guide)
  - [Available helpers](#available-helpers)
    - [Action helpers](#action-helpers)
      - [`call`](#call)
      - [`pipe`](#pipe)
      - [`compute`](#compute)
      - [`toggle`](#toggle)
      - [`noop`](#noop)
      - [`optional`](#optional)
      - [`queue`](#queue)
    - [Array helpers](#array-helpers)
      - [`map`](#map)
      - [`map-by`](#map-by)
      - [`sort-by`](#sort-by)
      - [`filter`](#filter)
      - [`filter-by`](#filter-by)
      - [`reject-by`](#reject-by)
      - [`find-by`](#find-by)
      - [`intersect`](#intersect)
      - [`invoke`](#invoke)
      - [`union`](#union)
      - [`take`](#take)
      - [`drop`](#drop)
      - [`reduce`](#reduce)
      - [`repeat`](#repeat)
      - [`reverse`](#reverse)
      - [`range`](#range)
      - [`join`](#join)
      - [`compact`](#compact)
      - [`includes`](#includes)
      - [`append`](#append)
      - [`chunk`](#chunk)
      - [`without`](#without)
      - [`shuffle`](#shuffle)
      - [`flatten`](#flatten)
      - [`object-at`](#object-at)
      - [`slice`](#slice)
      - [`next`](#next)
      - [`has-next`](#has-next)
      - [`previous`](#previous)
      - [`has-previous`](#has-previous)
    - [Object helpers](#object-helpers)
      - [`entries`](#entries)
      - [`from-entries`](#from-entries)
      - [`group-by`](#group-by)
      - [`keys`](#keys)
      - [`pick`](#pick)
      - [`values`](#values)
    - [Math helpers](#math-helpers)
      - [`inc`](#inc)
      - [`dec`](#dec)
    - [String helpers](#string-helpers)
    - [See also:](#see-also)
  - [Legal](#legal)
  - [Contributors](#contributors)

## Compatibility
------------------------------------------------------------------------------

* [ember-source][gh-ember-source] v3.28+
* [typescript][gh-typescript] v4.8+
* [ember-auto-import][gh-ember-auto-import] v2+

## Argument ordering

This addon is built with _composability_ in mind, and in order to faciliate that,
the ordering of arguments is somewhat different then you might be used to.

For all non-unary helpers, the subject of the helper function will always be the last argument.
This way the arguments are better readable if you compose together multiple helpers:

```hbs
{{take 5 (sort-by "lastName" "firstName" (filter-by "active" array))}}
```

For action helpers, this will mean better currying semantics:

```hbs
<button {{on 'click' (pipe (action "closePopover") (toggle "isExpanded")) this}}>
  {{if isExpanded "I am expanded" "I am not"}}
</button>
```

## Upgrade Guide
For help upgrading between major versions, check out the [upgrading documentation](https://github.com/DockYard/ember-composable-helpers/blob/master/UPGRADING.md).

## Available helpers

### Action helpers

#### `pipe`
Pipes the return values of actions in a sequence of actions. This is useful to compose a pipeline of actions, so each action can do only one thing.

```hbs
<button {{action (pipe (action 'addToCart') (action 'purchase') (action 'redirectToThankYouPage')) item}}>
  1-Click Buy
</button>
```

The `pipe` helper is Promise-aware, meaning that if any action in the pipeline returns a Promise, its return value will be piped into the next action. If the Promise rejects, the rest of the pipeline will be aborted.

The `pipe` helper can also be used directly as a closure action (using `pipe-action`) when being passed into a Component, which provides an elegant syntax for composing actions:

```hbs
{{foo-bar
    addAndSquare=(pipe-action (action "add") (action "square"))
    multiplyAndSquare=(pipe-action (action "multiply") (action "square"))
}}
```

```hbs
{{! foo-bar/template.hbs }}
<button {{action addAndSquare 2 4}}>Add and Square</button>
<button {{action multiplyAndSquare 2 4}}>Multiply and Square</button>
```

**[⬆️️ back to top](#table-of-contents)**

#### `call`
Calls the given function with arguments

```hbs
{{#each (call (fn this.callMeWith @daysInMonth) as |week|}}
  {{#each week as |day|}}
    {{day}}
  {{/each}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**


#### `compute`
Calls an action as a template helper.

```hbs
The square of 4 is {{compute (action "square") 4}}
```

**[⬆️ back to top](#table-of-contents)**

#### `toggle`
Toggles a boolean value.

```hbs
<button {{action (toggle "isExpanded" this)}}>
  {{if isExpanded "I am expanded" "I am not"}}
</button>
```

`toggle` can also be used directly as a closure action using `toggle-action`:

```hbs
{{foo-bar
    toggleIsExpanded=(toggle-action "isExpanded" this)
    toggleIsSelected=(toggle-action "isSelected" this)
}}
```

```hbs
{{! foo-bar/template.hbs }}
<button {{action toggleIsExpanded}}>Open / Close</button>
<button {{action toggleIsSelected}}>Select / Deselect</button>
```

`toggle` also accepts optional values to rotate through:

```hbs
<button {{action (toggle "currentName" this "foo" "bar" "baz")}}>
  {{currentName}}
</button>
```

**[⬆️ back to top](#table-of-contents)**

#### `noop`

Returns an empty function.

```hbs
<div {{on "mouseenter" (if @isLoading (noop) @sendTrackingEvent))}}>Some content</div>
```

**[⬆️ back to top](#table-of-contents)**

#### `optional`

Allows for the passed in action to not exist.

```hbs
<button {{action (optional handleClick)}}>Click Me</button>
```

**[⬆️ back to top](#table-of-contents)**

#### `queue`

Like `pipe`, this helper runs actions in a sequence (from left-to-right). The
difference is that this helper passes the original arguments to each action, not
the result of the previous action in the sequence.

If one of the actions in the sequence returns a promise, then it will wait for
that promise to resolve before calling the next action in the sequence. If a
promise is rejected it will stop the sequence and no further actions will be
called.

```hbs
<button {{action (queue (action "backupData") (action "unsafeOperation") (action "restoreBackup"))}} />
```

**[⬆️ back to top](#table-of-contents)**

---

### Array helpers

#### `map`
Maps a callback on an array.

```hbs
{{#each (map (action "getName") users) as |fullName|}}
  {{fullName}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `map-by`
Maps an array on a property.

```hbs
{{#each (map-by "fullName" users) as |fullName|}}
  {{fullName}}
{{/each}}
```

#### `sort-by`
Sort an array by given properties.

```hbs
{{#each (sort-by "lastName" "firstName" users) as |user|}}
  {{user.lastName}}, {{user.firstName}}
{{/each}}
```

You can append `:desc` to properties to sort in reverse order.

```hbs
{{#each (sort-by "age:desc" users) as |user|}}
    {{user.firstName}} {{user.lastName}} ({{user.age}})
{{/each}}
```

You can also pass a method as the first argument:

```hbs
{{#each (sort-by (action "mySortAction") users) as |user|}}
  {{user.firstName}} {{user.lastName}} ({{user.age}})
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**


#### `filter`
Filters an array by a callback.

```hbs
{{#each (filter (action "isActive") users) as |user|}}
  {{user.name}} is active!
{{/each}}
```

#### `filter-by`
Filters an array by a property.

```hbs
{{#each (filter-by "isActive" true users) as |user|}}
  {{user.name}} is active!
{{/each}}
```

If you omit the second argument it will test if the property is truthy.

```hbs
{{#each (filter-by "address" users) as |user|}}
  {{user.name}} has an address specified!
{{/each}}
```

You can also pass an action as second argument:

```hbs
{{#each (filter-by "age" (action "olderThan" 18) users) as |user|}}
  {{user.name}} is older than eighteen!
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `reject-by`
The inverse of filter by.

```hbs
{{#each (reject-by "isActive" true users) as |user|}}
  {{user.name}} is not active!
{{/each}}
```

If you omit the third argument it will test if the property is falsey.

```hbs
{{#each (reject-by "address" users) as |user|}}
  {{user.name}} does not have an address specified!
{{/each}}
```

You can also pass an action as third argument:

```hbs
{{#each (reject-by "age" (action "youngerThan" 18) users) as |user|}}
  {{user.name}} is older than eighteen!
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `find-by`
Returns the first entry matching the given value.

```hbs
{{#let (find-by 'name' lookupName people) as |person|}}
  {{#if person}}
    {{#link-to 'person' person}}
      Click here to see {{person.name}}'s details
    {{/link-to}}
  {{/if}}
{{/let}}
```

**[⬆️ back to top](#table-of-contents)**

#### `intersect`
Creates an array of unique values that are included in all given arrays.

```hbs
<h1>Matching skills</h1>
{{#each (intersect desiredSkills currentSkills) as |skill|}}
  {{skill.name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `invoke`
Invokes a method on an object, or on each object of an array.

```hbs
<div id="popup">
  {{#each people as |person|}}
    <button {{action (invoke "rollbackAttributes" person)}}>
      Undo
    </button>
  {{/each}}
  <a {{action (invoke "save" people)}}>Save</a>
</div>
```

**[⬆️ back to top](#table-of-contents)**

#### `union`

Joins arrays to create an array of unique values. When applied to a single array, has the same behavior as `uniq`.

```hbs
{{#each (union cartA cartB cartC) as |cartItem|}}
  {{cartItem.price}} x {{cartItem.quantity}} for {{cartItem.name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `take`
Returns the first `n` entries of a given array.

```hbs
<h3>Top 3:</h3>
{{#each (take 3 contestants) as |contestant|}}
  {{contestant.rank}}. {{contestant.name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `drop`
Returns an array with the first `n` entries omitted.

```hbs
<h3>Other contestants:</h3>
{{#each (drop 3 contestants) as |contestant|}}
  {{contestant.rank}}. {{contestant.name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `reduce`
Reduce an array to a value.

```hbs
{{reduce (action "sum") 0 (array 1 2 3)}}
```

The last argument is initial value. If you omit it, undefined will be used.

#### `repeat`
Repeats `n` times. This can be useful for making an n-length arbitrary list for iterating upon (you can think of this form as a times helper, a la Ruby's `5.times { ... }`):

```hbs
{{#each (repeat 3) as |empty|}}
  I will be rendered 3 times
{{/each}}
```

You can also give it a value to repeat:

```hbs
{{#each (repeat 3 "Adam") as |name|}}
  {{name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `reverse`
Reverses the order of the array.

```hbs
{{#each (reverse friends) as |friend|}}
  If {{friend}} was first, they are now last.
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `range`
Generates a range of numbers between a `min` and `max` value.

```hbs
{{#each (range 10 20) as |number|}}
  {{! `number` will go from 10 to 19}}
{{/each}}
```

It can also be set to `inclusive`:

```hbs
{{#each (range 10 20 true) as |number|}}
  {{! `number` will go from 10 to 20}}
{{/each}}
```

And works with a negative range:

```hbs
{{#each (range 20 10) as |number|}}
  {{! `number` will go from 20 to 11}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `join`
Joins the given array with an optional separator into a string.

```hbs
{{join ', ' categories}}
```

**[⬆️ back to top](#table-of-contents)**

#### `compact`
Removes blank items from an array.

```hbs
{{#each (compact arrayWithBlanks) as |notBlank|}}
  {{notBlank}} is most definitely not blank!
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `includes`
Checks if a given value or sub-array is included within an array.

```hbs
{{includes selectedItem items}}
{{includes 1234 items}}
{{includes "First" (w "First Second Third") }}
{{includes (w "First Second") (w "First Second Third")}}
```

**[⬆️ back to top](#table-of-contents)**

#### `append`
Appends the given arrays and/or values into a single flat array.

```hbs
{{#each (append catNames dogName) as |petName|}}
  {{petName}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `chunk`
Returns the given array split into sub-arrays the length of the given value.

```hbs
{{#each (chunk 7 daysInMonth) as |week|}}
  {{#each week as |day|}}
    {{day}}
  {{/each}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `without`
Returns the given array without the given item(s).

```hbs
{{#each (without selectedItem items) as |remainingItem|}}
  {{remainingItem.name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `shuffle`
Shuffles an array with a randomizer function, or with `Math.random` as a default. Your randomizer function should return a number between 0 and 1.

```hbs
{{#each (shuffle array) as |value|}}
  {{value}}
{{/each}}
```

```hbs
{{#each (shuffle (action "myRandomizer") array) as |value|}}
  {{value}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `flatten`
Flattens an array to a single dimension.

```hbs
{{#each (flatten anArrayOfNamesWithMultipleDimensions) as |name|}}
  Name: {{name}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `object-at`
Returns the object at the given index of an array.

```hbs
{{object-at index array}}
```

**[⬆️ back to top](#table-of-contents)**

#### `slice`
Slices an array

```hbs
{{#each (slice 1 3 array) as |value|}}
  {{value}}
{{/each}}
```

**[⬆️ back to top](#table-of-contents)**

#### `next`
Returns the next element in the array given the current element. **Note:** Accepts an optional boolean
parameter, `useDeepEqual`, to flag whether a deep equal comparison should be performed.

```hbs
<button onclick={{action (mut selectedItem) (next selectedItem useDeepEqual items)}}>Next</button>
```

**[⬆️ back to top](#table-of-contents)**

#### `has-next`
Checks if the array has an element after the given element. **Note:** Accepts an optional boolean
parameter, `useDeepEqual`, to flag whether a deep equal comparison should be performed.

```hbs
{{#if (has-next page useDeepEqual pages)}}
  <button>Next</button>
{{/if}}
```

**[⬆️ back to top](#table-of-contents)**

#### `previous`
Returns the previous element in the array given the current element. **Note:** Accepts an optional boolean
parameter, `useDeepEqual`, to flag whether a deep equal comparison should be performed.

```hbs
<button onclick={{action (mut selectedItem) (previous selectedItem useDeepEqual items)}}>Previous</button>
```

**[⬆️ back to top](#table-of-contents)**

#### `has-previous`
Checks if the array has an element before the given element. **Note:** Accepts an optional boolean
parameter, `useDeepEqual`, to flag whether a deep equal comparison should be performed

```hbs
{{#if (has-previous page useDeepEqual pages)}}
  <button>Previous</button>
{{/if}}
```

**[⬆️ back to top](#table-of-contents)**

---

### Object helpers

#### `entries`
Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs

```hbs
  {{#each (entries object) as |entry|}}
    {{get entry 0}}:{{get entry 1}}
  {{/each}}
```

You can pair it with other array helpers too. For example

```hbs
  {{#each (sort-by myOwnSortByFunction (entries myObject)) as |entry|}}
    {{get entry 0}}
  {{/each}}`);
```

**[⬆️ back to top](#table-of-contents)**

#### `from-entries`
Converts a two-dimensional array of `[key, value]` pairs into an Object

```hbs
  {{#each-in (from-entries entries) as |key value|}}
    {{key}}:{{value}}
  {{/each}}
```

You can pair it with other array helpers too. For example, to copy only
properties with non-falsey values:

```hbs
  {{#each-in (from-entries (filter-by "1" (entries myObject))) as |k v|}}
    {{k}}: {{v}}
  {{/each-in}}`);
```

**[⬆️ back to top](#table-of-contents)**

#### `group-by`
Returns an object where the keys are the unique values of the given property, and the values are an array with all items of the array that have the same value of that property.

```hbs
{{#each-in (group-by "category" artists) as |category artists|}}
  <h3>{{category}}</h3>
  <ul>
    {{#each artists as |artist|}}
      <li>{{artist.name}}</li>
    {{/each}}
  </ul>
{{/each-in}}
```

**[⬆️ back to top](#table-of-contents)**

#### `keys`
Returns an array of keys of given object.

```hbs
{{#let (keys fields) as |labels|}}
  <h3>This article contain {{labels.length}} fields</h3>
  <ul>
    {{#each labels as |label|}}
      <li>{{label}}</li>
    {{/each}}
  </ul>
{{/let}}
```

**[⬆️ back to top](#table-of-contents)**

#### `pick`
Receives an object and picks a specified path off of it to pass on. Intended for use with `{{on}}` modifiers placed on form elements.

```hbs
  <input
    ...
    {{on 'input' (pipe (pick 'target.value') this.onInput)}}
  />
```

It also supports an optional second argument to make common usage more ergonomic.

```hbs
  <input
    ...
    {{on 'input' (pick 'target.value' this.onInput)}}
  />
```

**[⬆️ back to top](#table-of-contents)*

#### `values`
Returns an array of values from the given object.

```hbs
{{#let (values fields) as |data|}}
  <h3>This article contain {{data.length}} fields</h3>
  <ul>
    {{#each data as |datum|}}
      <li>{{datum}}</li>
    {{/each}}
  </ul>
{{/let}}
```

**[⬆️ back to top](#table-of-contents)*

---

### Math helpers

#### `inc`
Increments by `1` or `step`.

```hbs
{{inc numberOfPeople}}
{{inc 2 numberOfPeople}}
```

**[⬆️ back to top](#table-of-contents)**

#### `dec`
Decrements by `1` or `step`.

```hbs
{{dec numberOfPeople}}
{{dec 2 numberOfPeople}}
```

**[⬆️ back to top](#table-of-contents)**

---

### String helpers

String helpers were extracted to the [ember-cli-string-helpers](https://github.com/romulomachado/ember-cli-string-helpers) addon.

### See also:

* [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)
* [ember-math-helpers](https://github.com/shipshapecode/ember-math-helpers)
* [ember-cli-string-helpers](https://github.com/romulomachado/ember-cli-string-helpers)

## Contributors

We're grateful to these wonderful contributors who've contributed to `ember-composable-helpers`:

[//]: contributor-faces
<a href="https://github.com/poteto"><img src="https://avatars0.githubusercontent.com/u/1390709?v=4" title="poteto" width="80" height="80"></a>
<a href="https://github.com/martndemus"><img src="https://avatars2.githubusercontent.com/u/903637?v=4" title="martndemus" width="80" height="80"></a>
<a href="https://github.com/snewcomer"><img src="https://avatars0.githubusercontent.com/u/7374640?v=4" title="snewcomer" width="80" height="80"></a>
<a href="https://github.com/romulomachado"><img src="https://avatars0.githubusercontent.com/u/266400?v=4" title="romulomachado" width="80" height="80"></a>
<a href="https://github.com/cibernox"><img src="https://avatars2.githubusercontent.com/u/265339?v=4" title="cibernox" width="80" height="80"></a>
<a href="https://github.com/vikram7"><img src="https://avatars0.githubusercontent.com/u/7072744?v=4" title="vikram7" width="80" height="80"></a>
<a href="https://github.com/Asherlc"><img src="https://avatars3.githubusercontent.com/u/1294552?v=4" title="Asherlc" width="80" height="80"></a>
<a href="https://github.com/ef4"><img src="https://avatars0.githubusercontent.com/u/319282?v=4" title="ef4" width="80" height="80"></a>
<a href="https://github.com/gmurphey"><img src="https://avatars3.githubusercontent.com/u/373721?v=4" title="gmurphey" width="80" height="80"></a>
<a href="https://github.com/GavinJoyce"><img src="https://avatars0.githubusercontent.com/u/2526?v=4" title="GavinJoyce" width="80" height="80"></a>
<a href="https://github.com/jrjohnson"><img src="https://avatars2.githubusercontent.com/u/349624?v=4" title="jrjohnson" width="80" height="80"></a>
<a href="https://github.com/thomascchen"><img src="https://avatars0.githubusercontent.com/u/11340361?v=4" title="thomascchen" width="80" height="80"></a>
<a href="https://github.com/xomaczar"><img src="https://avatars2.githubusercontent.com/u/2079865?v=4" title="xomaczar" width="80" height="80"></a>
<a href="https://github.com/bcardarella"><img src="https://avatars0.githubusercontent.com/u/18524?v=4" title="bcardarella" width="80" height="80"></a>
<a href="https://github.com/leizhao4"><img src="https://avatars2.githubusercontent.com/u/763847?v=4" title="leizhao4" width="80" height="80"></a>
<a href="https://github.com/maabernethy"><img src="https://avatars2.githubusercontent.com/u/4601777?v=4" title="maabernethy" width="80" height="80"></a>
<a href="https://github.com/robbiespeed"><img src="https://avatars0.githubusercontent.com/u/1743161?v=4" title="robbiespeed" width="80" height="80"></a>
<a href="https://github.com/spencer516"><img src="https://avatars2.githubusercontent.com/u/2889608?v=4" title="spencer516" width="80" height="80"></a>
<a href="https://github.com/taras"><img src="https://avatars2.githubusercontent.com/u/74687?v=4" title="taras" width="80" height="80"></a>
<a href="https://github.com/blimmer"><img src="https://avatars1.githubusercontent.com/u/630449?v=4" title="blimmer" width="80" height="80"></a>
<a href="https://github.com/bwittenbrook3"><img src="https://avatars3.githubusercontent.com/u/5309252?v=4" title="bwittenbrook3" width="80" height="80"></a>
<a href="https://github.com/chrislopresto"><img src="https://avatars0.githubusercontent.com/u/93691?v=4" title="chrislopresto" width="80" height="80"></a>
<a href="https://github.com/makepanic"><img src="https://avatars3.githubusercontent.com/u/1205444?v=4" title="makepanic" width="80" height="80"></a>
<a href="https://github.com/ConorLinehan"><img src="https://avatars2.githubusercontent.com/u/5772795?v=4" title="ConorLinehan" width="80" height="80"></a>
<a href="https://github.com/Daniel-Xu"><img src="https://avatars0.githubusercontent.com/u/548144?v=4" title="Daniel-Xu" width="80" height="80"></a>
<a href="https://github.com/HeroicEric"><img src="https://avatars0.githubusercontent.com/u/602204?v=4" title="HeroicEric" width="80" height="80"></a>
<a href="https://github.com/brzpegasus"><img src="https://avatars1.githubusercontent.com/u/1691398?v=4" title="brzpegasus" width="80" height="80"></a>

[//]: contributor-faces
