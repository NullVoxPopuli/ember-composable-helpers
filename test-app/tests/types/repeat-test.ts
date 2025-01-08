import { repeat } from '@nullvoxpopuli/ember-composable-helpers/helpers/repeat';
import { expectTypeOf } from 'expect-type'

expectTypeOf(repeat([10, "hello"])).toEqualTypeOf<string[]>();
expectTypeOf(repeat([10])).toEqualTypeOf<undefined[]>();
