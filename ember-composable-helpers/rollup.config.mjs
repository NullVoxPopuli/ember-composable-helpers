import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: addon.output(),

  plugins: [
    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints(['-private/closure-action.js', '-private/get-value-array-and-use-deep-equal-from-params.js', 'helpers/append.js', 'helpers/call.js', 'helpers/chunk.js', 'helpers/compact.js', 'helpers/compute.js', 'helpers/dec.js', 'helpers/drop.js', 'helpers/entries.js', 'helpers/filter-by.js', 'helpers/filter.js', 'helpers/find-by.js', 'helpers/flatten.js', 'helpers/from-entries.js', 'helpers/group-by.js', 'helpers/has-next.js', 'helpers/has-previous.js', 'helpers/inc.js', 'helpers/includes.js', 'helpers/intersect.js', 'helpers/invoke.js', 'helpers/join.js', 'helpers/keys.js', 'helpers/map-by.js', 'helpers/map.js', 'helpers/next.js', 'helpers/noop.js', 'helpers/object-at.js', 'helpers/optional.js', 'helpers/pick.js', 'helpers/pipe-action.js', 'helpers/pipe.js', 'helpers/previous.js', 'helpers/queue.js', 'helpers/range.js', 'helpers/reduce.js', 'helpers/reject-by.js', 'helpers/repeat.js', 'helpers/reverse.js', 'helpers/shuffle.js', 'helpers/slice.js', 'helpers/sort-by.js', 'helpers/take.js', 'helpers/toggle-action.js', 'helpers/toggle.js', 'helpers/union.js', 'helpers/values.js', 'helpers/without.js', 'index.js', 'utils/as-array.js', 'utils/comparison.js', 'utils/get-index.js', 'utils/is-equal.js', 'utils/is-object.js', 'utils/is-promise.js']),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    addon.appReexports(['helpers/append.js', 'helpers/call.js', 'helpers/chunk.js', 'helpers/compact.js', 'helpers/compute.js', 'helpers/dec.js', 'helpers/drop.js', 'helpers/entries.js', 'helpers/filter-by.js', 'helpers/filter.js', 'helpers/find-by.js', 'helpers/flatten.js', 'helpers/from-entries.js', 'helpers/group-by.js', 'helpers/has-next.js', 'helpers/has-previous.js', 'helpers/inc.js', 'helpers/includes.js', 'helpers/intersect.js', 'helpers/invoke.js', 'helpers/join.js', 'helpers/keys.js', 'helpers/map-by.js', 'helpers/map.js', 'helpers/next.js', 'helpers/noop.js', 'helpers/object-at.js', 'helpers/optional.js', 'helpers/pick.js', 'helpers/pipe-action.js', 'helpers/pipe.js', 'helpers/previous.js', 'helpers/queue.js', 'helpers/range.js', 'helpers/reduce.js', 'helpers/reject-by.js', 'helpers/repeat.js', 'helpers/reverse.js', 'helpers/shuffle.js', 'helpers/slice.js', 'helpers/sort-by.js', 'helpers/take.js', 'helpers/toggle-action.js', 'helpers/toggle.js', 'helpers/union.js', 'helpers/values.js', 'helpers/without.js']),

    // Follow the V2 Addon rules about dependencies. Your code can import from
    // `dependencies` and `peerDependencies` as well as standard Ember-provided
    // package names.
    addon.dependencies(),

    // This babel config should *not* apply presets or compile away ES modules.
    // It exists only to provide development niceties for you, like automatic
    // template colocation.
    //
    // By default, this will load the actual babel config from the file
    // babel.config.json.
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js'],
    }),

    // Ensure that standalone .hbs files are properly integrated as Javascript.
    addon.hbs(),

    // addons are allowed to contain imports of .css files, which we want rollup
    // to leave alone and keep in the published output.
    addon.keepAssets(['**/*.css']),

    // Remove leftover build artifacts when starting a new build.
    addon.clean(),

    // Copy Readme and License into published package
    copy({
      targets: [
        { src: '../README.md', dest: '.' },
        { src: '../LICENSE.md', dest: '.' },
      ],
    }),
  ],
};
