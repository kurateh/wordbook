export const makeConstOf =
  <T>() =>
  <const U extends T>(value: U): U =>
    value;

export const constOf = makeConstOf<unknown>();
