import { pick } from '@nullvoxpopuli/ember-composable-helpers/helpers/pick';

// With an action
pick(['target.value', (value: string) => value]);

// The action is optional: only picks the value
pick(['target.value']);
