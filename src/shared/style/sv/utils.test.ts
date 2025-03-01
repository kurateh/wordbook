import { type TextStyle } from "react-native";

import { mergeStyleValues } from "./utils";

describe("mergeStyleValues", () => {
  it("should merge multiple style objects", () => {
    const result = mergeStyleValues(
      { color: "red", fontSize: 12 },
      { margin: 10, color: "blue" },
    );
    expect(result).toEqual({ color: "blue", fontSize: 12, margin: 10 });
  });

  it("should handle null and undefined values", () => {
    const style1 = { color: "red" };
    const result = mergeStyleValues(style1, null, undefined);
    expect(result).toEqual({ color: "red" });
  });

  it("should handle false and zero values", () => {
    const style1 = { color: "red" };
    const result = mergeStyleValues(style1, false, 0);
    expect(result).toEqual({ color: "red" });
  });

  it("should merge nested style arrays", () => {
    const result = mergeStyleValues<TextStyle>({ color: "red" }, [
      { margin: 10 },
      { padding: 5 },
    ]);
    expect(result).toEqual({ color: "red", margin: 10, padding: 5 });
  });

  it("should merge deeply nested style arrays", () => {
    const result = mergeStyleValues<TextStyle>({ color: "red" }, [
      { margin: 10 },
      [{ padding: 5 }, { backgroundColor: "blue" }],
    ]);
    expect(result).toEqual({
      color: "red",
      margin: 10,
      padding: 5,
      backgroundColor: "blue",
    });
  });
});
