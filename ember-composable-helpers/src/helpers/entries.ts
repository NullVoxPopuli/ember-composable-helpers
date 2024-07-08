import { helper } from '@ember/component/helper';

export function entries([object]: [Record<string, unknown> | null | undefined]) {
  if (!object) {
    return object;
  }
  return Object.entries(object);
}

export default helper(entries);
