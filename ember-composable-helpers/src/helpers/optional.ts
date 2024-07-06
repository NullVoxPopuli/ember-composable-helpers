import { helper } from '@ember/component/helper';

export function optional([action]: [() => void]) {
  if (typeof action === 'function') {
    return action;
  }

  return (i: never) => i;
}

export default helper(optional);
