"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      watchDependencies: ["ember-composable-helpers"],
      alias: {
        "ember-composable-helpers": "@nullvoxpopuli/ember-composable-helpers",
      },
      webpack: {
        resolve: {
          alias: {},
        },
      },
    },
    name: "test-app",
  });

  return app.toTree();
};
