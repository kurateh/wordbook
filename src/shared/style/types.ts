import { type ImageStyle, type TextStyle, type ViewStyle } from "react-native";

export type SlotsToStyles<S extends string> = {
  [key in S]?: ViewStyle | TextStyle | ImageStyle;
};
