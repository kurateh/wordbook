import { font, fontWeights, type FontWeight } from "~/shared/style/fonts";
import { sv, type VariantProps } from "~/shared/style/sv";
import { textStyle } from "~/shared/style/utils";

export const textStyles = sv({
  base: textStyle({}),
  variants: {
    font: {
      pretendard: {
        fontFamily: font.pretendard.medium,
      },
    },
    weight: {
      thin: {},
      extralight: {},
      light: {},
      regular: {},
      medium: {},
      semibold: {},
      bold: {},
      extrabold: {},
      black: {},
    } satisfies Record<FontWeight, object>,
  },
  defaultVariants: {
    font: "pretendard",
    weight: "medium",
  },
  compoundVariants: [
    ...fontWeights.map(
      (weight) =>
        ({
          font: "pretendard",
          weight,
          style: {
            fontFamily: font.pretendard[weight],
          },
        }) as const,
    ),
  ],
});

export type TextVariants = VariantProps<typeof textStyles>;
