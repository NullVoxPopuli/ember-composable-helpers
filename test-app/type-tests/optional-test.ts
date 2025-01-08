import { optional } from '@nullvoxpopuli/ember-composable-helpers/helpers/optional';
import { expectTypeOf } from 'expect-type'

expectTypeOf(optional([() => true])).toEqualTypeOf<(() => boolean)>();

expectTypeOf(optional([])).toEqualTypeOf<<Arg>(arg: Arg) => Arg>();

declare const maybeFn: ((a: number) => string) | undefined;

expectTypeOf(optional([maybeFn])).toEqualTypeOf<((a: number) => string) | (<Arg>(arg: Arg) => Arg)>();

function takesFn(fn: (a: number) => number) {
  return fn(1);
}

takesFn(optional([]));

function invalidTakesFn(fn: (a: number) => string) {
  return fn(1);
}

// @ts-expect-error -- optional returns a function that returns the same type as the argument
invalidTakesFn(optional([]));

