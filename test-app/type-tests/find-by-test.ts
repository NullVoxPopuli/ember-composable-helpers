import { findBy } from '@nullvoxpopuli/ember-composable-helpers/helpers/find-by';
import { expectTypeOf } from 'expect-type';

expectTypeOf(findBy(['id', 1, [{ id: 1 }]])).toEqualTypeOf<
  { id: number } | undefined
>();

// null and undefined arrays are treated as empty
function maybeFind(
  missing: { id: number }[] | undefined,
  none: { id: number }[] | null,
) {
  expectTypeOf(findBy(['id', 1, missing])).toEqualTypeOf<
    { id: number } | undefined
  >();
  expectTypeOf(findBy(['id', 1, none])).toEqualTypeOf<
    { id: number } | undefined
  >();
}
void maybeFind;
