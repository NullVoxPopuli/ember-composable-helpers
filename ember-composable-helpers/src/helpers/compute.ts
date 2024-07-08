import { helper } from '@ember/component/helper';

export function compute([action, ...params]: [(...args: never[]) => unknown]) {
  return action(...params);
}

export default helper(compute);
