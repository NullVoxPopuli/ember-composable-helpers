export default function getValueArrayAndUseDeepEqualFromParams<T>(params: [T, boolean | T[], T[]?]) {
  let currentValue = params[0];

  let array;
  let useDeepEqual = false;
  if (params.length === 2) {
    array = params[1];
  } else {
    useDeepEqual = params[1] as boolean;
    array = params[2] as T[];
  }

  return {
    currentValue,
    array,
    useDeepEqual
  }
}
