import { constOf, makeConstOf } from "~/shared/function";

export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

type FontSet = Record<FontWeight, string>;

const fontSet = makeConstOf<Partial<FontSet>>();

const pretendard = fontSet({
  thin: "PretendardJP-Thin",
  extralight: "PretendardJP-ExtraLight",
  light: "PretendardJP-Light",
  regular: "PretendardJP-Regular",
  medium: "PretendardJP-Medium",
  semibold: "PretendardJP-SemiBold",
  bold: "PretendardJP-Bold",
  extrabold: "PretendardJP-ExtraBold",
  black: "PretendardJP-Black",
});

const size = constOf({
  xs: "12px", // 0.75rem
  sm: "14px", // 0.875rem
  base: "16px", // 1rem
  lg: "18px", // 1.125rem
  xl: "20px", // 1.25rem
  "2xl": "24px", // 1.5rem
  "3xl": "30px", // 1.875rem
  "4xl": "36px", // 2.25rem
  "5xl": "48px", // 3rem
  "6xl": "69px", // 3.75rem
  "7xl": "72px", // 4.5rem
  "8xl": "96px", // 6rem
});

export const fonts = {
  pretendard,
  size,
} as const;

export type Font = keyof typeof fonts;
