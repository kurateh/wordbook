import { type ImageStyle, type TextStyle, type ViewStyle } from "react-native";

export type Style = TextStyle | ViewStyle | ImageStyle;

export type SlotsToStyles<S extends string> = {
  [key in S]?: Style;
};

export type DeterminedStyle<S extends Style> = S extends ViewStyle
  ? ViewStyle
  : S extends TextStyle
    ? TextStyle
    : S extends ImageStyle
      ? ImageStyle
      : never;
