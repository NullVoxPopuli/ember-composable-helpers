import { filterBy } from '@nullvoxpopuli/ember-composable-helpers/helpers/filter-by';
import { expectTypeOf } from 'expect-type';

const items = [{ active: true }, { active: false }];

// 3 positional arguments: path, value, array
expectTypeOf(filterBy(['active', true, items])).toEqualTypeOf<
  { active: boolean }[]
>();

// 2 positional arguments: path, array (keeps items where path is truthy)
expectTypeOf(filterBy(['active', items])).toEqualTypeOf<
  { active: boolean }[]
>();

// @ts-expect-error -- 'missing' is not a key of the items
filterBy(['missing', items]);

// @ts-expect-error -- 'missing' is not a key of the items
filterBy(['missing', true, items]);

// @ts-expect-error -- the array is required
filterBy(['active']);

// @ts-expect-error -- the value must match the type of the path
filterBy(['active', 'yes', items]);
