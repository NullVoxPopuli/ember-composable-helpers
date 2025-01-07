import type { AnyFn } from '@ember/-internals/utility-types';
import { helper } from '@ember/component/helper';

export function optional([action]: [AnyFn | undefined]) {
  if (typeof action === 'function') {
    return action;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (i: any) => i;
}

export default helper(optional);
