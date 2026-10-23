import { pipe } from '@nullvoxpopuli/ember-composable-helpers/helpers/pipe';
import { expectTypeOf } from 'expect-type';

const a = (n: number) => n + 1;
const b = (n: number) => String(n);

// Returns a function that accepts any arguments
// eslint-disable-next-line @typescript-eslint/no-explicit-any
expectTypeOf(pipe([a, b])).toEqualTypeOf<(...args: any[]) => any>();

// Can be used as an event handler, e.g. `{{on "click" (pipe a b)}}`
const handler: (event: MouseEvent) => void = pipe([a, b]);
void handler;
