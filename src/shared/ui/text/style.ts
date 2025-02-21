import { createStyleSheet } from "react-native-unistyles";

import { type Font, type FontWeight } from "~/shared/style/fonts";

type _TextVariants = {
  font: Font;
  weight: FontWeight;
};

export type TextVariants = Partial<_TextVariants>;

export const textStylesheet = createStyleSheet((theme) => ({
  base: ({ font, weight }: _TextVariants) => {
    return {
      fontFamily: (() => {
        switch (font) {
          case "pretendard":
            return theme.fonts.pretendard[weight];

          default:
            return undefined;
        }
      })(),
    };
  },
}));
