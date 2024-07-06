import { helper } from '@ember/component/helper';

export function values([object]: [Record<string, unknown> | null | undefined]) {
  if (!object) {
    return object;
  }
  return Object.values(object);
}

export default helper(values);
