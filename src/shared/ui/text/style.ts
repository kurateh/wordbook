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
            switch (weight) {
              case "thin":
                return theme.fonts.pretendard.thin;
              case "extralight":
                return theme.fonts.pretendard.extralight;
              case "light":
                return theme.fonts.pretendard.light;
              case "regular":
                return theme.fonts.pretendard.regular;
              case "medium":
                return theme.fonts.pretendard.medium;
              case "semibold":
                return theme.fonts.pretendard.semibold;
              case "bold":
                return theme.fonts.pretendard.bold;
              case "extrabold":
                return theme.fonts.pretendard.extrabold;
              case "black":
                return theme.fonts.pretendard.black;
              default:
                return undefined;
            }
          default:
            return undefined;
        }
      })(),
    };
  },
}));
