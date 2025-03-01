// src/shared/style/utils.test.ts
import { mapPropsVariants } from "./utils";

describe("mapPropsVariants", () => {
  it("should return the original props and an empty object when no variantKeys are provided", () => {
    const props = { a: 1, b: 2 };
    const [resultProps, picked] = mapPropsVariants(props, undefined);

    expect(resultProps).toEqual(props);
    expect(picked).toEqual({});
  });

  it("should pick the specified variant keys from props", () => {
    const props = { a: 1, b: 2, c: 3 };
    const [resultProps, picked] = mapPropsVariants(props, ["a", "c"]);

    expect(resultProps).toEqual(props);
    expect(picked).toEqual({ a: 1, c: 3 });
  });

  it("should omit the specified variant keys from props when removeVariantProps is true", () => {
    const props = { a: 1, b: 2, c: 3 };
    const [resultProps, picked] = mapPropsVariants(props, ["a", "c"], true);

    expect(resultProps).toEqual({ b: 2 });
    expect(picked).toEqual({ a: 1, c: 3 });
  });

  it("should return the original props and picked variants when removeVariantProps is false", () => {
    const props = { a: 1, b: 2, c: 3 };
    const [resultProps, picked] = mapPropsVariants(props, ["a", "c"], false);

    expect(resultProps).toEqual(props);
    expect(picked).toEqual({ a: 1, c: 3 });
  });
});
