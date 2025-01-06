import { call } from '@nullvoxpopuli/ember-composable-helpers/helpers/call';
import { expectTypeOf } from 'expect-type'

expectTypeOf(call([() => true])).toEqualTypeOf<boolean>();

// @ts-expect-error Does not allow function with arguments
call([(a: number, b: string) => true]);

// Allows optional arguments
call([(a?: number) => true]);

type ThisArg = { a: number };

// Allows a `this` argument
const thisArg: ThisArg = { a: 1 };
call([() => true, thisArg]);

// `thisArg` matches the type
call([function (this: ThisArg) { return true; }, thisArg]);

// @ts-expect-error -- thisArg is not the correct type
call([function (this: ThisArg) { return true; }, { a: '1' }]);
