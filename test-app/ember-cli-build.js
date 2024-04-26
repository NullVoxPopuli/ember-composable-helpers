"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      watchDependencies: ["ember-composable-helpers"],
    },
  });

  const { Webpack } = require("@embroider/webpack");
  return require("@embroider/compat").compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    packagerOptions: {
      webpackConfig: {
        resolve: {
          alias: {
            "ember-composable-helpers":
              "@nullvoxpopuli/ember-composable-helpers",
          },
        },
      },
    },
  });
};
