import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export function pick([path, action]: [string, (...args: any[]) => void]) {
  return function(event: Event) {
    let value = get(event, path);

    if (!action) {
      return value;
    }

    action(value);
  };
}

export default helper(pick);
