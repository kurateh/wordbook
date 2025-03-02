import { commonColors, semanticColors } from "./colors";
import { font } from "./fonts";
import { radius } from "./radius";
import { spacing } from "./spacing";

const common = {
  fonts: font,
  spacing,
  radius,
} as const;

export const lightTheme = {
  ...common,
  colors: { ...commonColors, ...semanticColors.light },
} as const;

export const darkTheme = {
  ...common,
  colors: { ...commonColors, ...semanticColors.dark },
} as const;
