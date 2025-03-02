import { entries, fromEntries } from "~/shared/object";
import { spacing } from "~/shared/style/spacing";
import { sv, type VariantProps } from "~/shared/style/sv";
import { viewStyle } from "~/shared/style/utils";

export const spinnerStyle = sv({
  slots: {
    wrapper: viewStyle({}),
    spinner: viewStyle({}),
  },
  variants: {
    size: fromEntries(
      entries({ sm: spacing[5], md: spacing[8], lg: spacing[10] }).map(
        ([key, space]) => [
          key,
          {
            wrapper: { width: space, height: space },
            spinner: { width: space, height: space },
          },
        ],
      ),
    ),
  },
  defaultVariants: {
    size: "md",
  },
});

export const spinnerSlotKeys = spinnerStyle.slotKeys;

export type SpinnerSlots = (typeof spinnerSlotKeys)[number];

export type SpinnerVariantProps = VariantProps<typeof spinnerStyle>;
