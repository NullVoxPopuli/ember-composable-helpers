import { filter } from '@nullvoxpopuli/ember-composable-helpers/helpers/filter';
import { expectTypeOf } from 'expect-type';

// Callback does not need to be a type predicate
expectTypeOf(filter([(n: number) => n > 1, [1, 2, 3]])).toEqualTypeOf<
  number[]
>();

// Callback can receive the index and array
filter([(_n: number, index: number, all: number[]) => index < all.length, [1]]);

// @ts-expect-error -- callback must be a function
filter(['nope', [1, 2, 3]]);

// @ts-expect-error -- callback parameter must match the items
filter([(s: string) => s.length > 1, [1, 2, 3]]);
