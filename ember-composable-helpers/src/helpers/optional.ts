import { helper } from '@ember/component/helper';

export function optional([action]: [((...args: any[]) => void) | undefined]) {
  if (typeof action === 'function') {
    return action;
  }

  return (i: any) => i;
}

export default helper(optional);
