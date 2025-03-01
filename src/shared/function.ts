export const makeConstOf =
  <T>() =>
  <const U extends T>(value: U): U =>
    value;

export const constOf = makeConstOf<unknown>();

export const of = <T>(value: T): T => value;

export const makeOf = <T>() => of<T>;
