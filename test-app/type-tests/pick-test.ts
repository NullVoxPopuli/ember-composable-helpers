import { pick } from '@nullvoxpopuli/ember-composable-helpers/helpers/pick';

// With an action
pick(['target.value', (value: string) => value]);

// The action is optional: only picks the value
pick(['target.value']);

// @ts-expect-error -- the path is required
pick([]);

// @ts-expect-error -- the action must be a function
pick(['target.value', 'nope']);
