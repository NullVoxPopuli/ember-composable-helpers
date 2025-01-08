import { compute } from '@nullvoxpopuli/ember-composable-helpers/helpers/compute';
import { expectTypeOf } from 'expect-type'

expectTypeOf(compute([(a: number, b: string) => true, 1, '2'])).toEqualTypeOf<boolean>();

// @ts-expect-error -- missing all arguments
compute([(a: number, b: string) => true]);

// @ts-expect-error -- missing some arguments
compute([(a: number, b: string) => true]);

// @ts-expect-error -- incorrectly typed arguments
compute([(a: number, b: string) => true, '1', 2]);
