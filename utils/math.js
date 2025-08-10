const EPSILON = 0.00001;

export function equal(v1, v2) {
  return Math.abs(v1 - v2) <= EPSILON;
}
