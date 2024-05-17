import { helper } from '@ember/component/helper';

export function compute([action, ...params]: [() => void]) {
  return action(...params);
}

export default helper(compute);
