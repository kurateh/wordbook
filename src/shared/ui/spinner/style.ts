import { createStyleSheet } from "react-native-unistyles";
import { match } from "ts-pattern";

import { type UnionToTuple } from "~/shared/types";

type _SpinnerVariantProps = {
  size: "sm" | "md" | "lg";
};

export type SpinnerVariantProps = Partial<_SpinnerVariantProps>;

export const spinnerVariantKeys: UnionToTuple<keyof SpinnerVariantProps> = [
  "size",
];

export const spinnerStylesheet = createStyleSheet((theme) => ({
  wrapper: ({ size }: _SpinnerVariantProps) => {
    const spacing = match(size)
      .with("sm", () => theme.spacing[5])
      .with("md", () => theme.spacing[8])
      .with("lg", () => theme.spacing[10])
      .exhaustive();

    return {
      width: spacing,
      height: spacing,
    };
  },
  spinner: ({ size }: _SpinnerVariantProps) => {
    const spacing = match(size)
      .with("sm", () => theme.spacing[5])
      .with("md", () => theme.spacing[8])
      .with("lg", () => theme.spacing[10])
      .exhaustive();

    return {
      width: spacing,
      height: spacing,
    };
  },
}));

export type SpinnerSlots = keyof ReturnType<typeof spinnerStylesheet>;
