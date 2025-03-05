import { mapBy } from '@nullvoxpopuli/ember-composable-helpers/helpers/map-by';
import { expectTypeOf } from 'expect-type';

expectTypeOf(mapBy(['address', [{ address: 1 }]])).toEqualTypeOf<number[]>();

// @ts-expect-error -- byPath isn't a key of array obj
expectTypeOf(mapBy(['foo', [{ address: 1 }]]));
