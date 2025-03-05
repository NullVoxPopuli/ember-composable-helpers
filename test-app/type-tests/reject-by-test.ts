import { rejectBy } from '@nullvoxpopuli/ember-composable-helpers/helpers/reject-by';
import { expectTypeOf } from 'expect-type';

expectTypeOf(rejectBy(['address', [{ address: 1 }]])).toEqualTypeOf<
  { address: number }[]
>();
