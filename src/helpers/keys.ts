import { helper } from '@ember/component/helper';

export function keys([object]: [Record<string, unknown> | null | undefined]) {
  if (!object) {
    return object;
  }
  return Object.keys(object);
}

export default helper(keys);
