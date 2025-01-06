'use strict';

module.exports = {
  extends: 'recommended',

  overrides: [
		{
			files: ['tests/integration/helpers/chunk-test.js'],
			rules: {
        'no-obscure-array-access': 'off',
			},
		},
    {
      files: ['tests/**/*.js'],
      rules: {
        // TODO: Fix this!
        'no-action': 'off',
      }
    }
	],
};
