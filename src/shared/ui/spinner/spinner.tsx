import { pipe } from "fp-ts/lib/function";
import {
  type ComponentPropsWithRef,
  type ElementRef,
  forwardRef,
  useMemo,
} from "react";
import { View, type ViewStyle } from "react-native";
import * as Progress from "react-native-progress";
import { match, P } from "ts-pattern";

import { O } from "~/shared/fp";
import { colors, type SemanticColor } from "~/shared/style/colors";
import { mapPropsVariants } from "~/shared/style/utils";

import { spinnerStyle, type SpinnerVariantProps } from "./style";

export interface SpinnerProps
  extends Omit<
      ComponentPropsWithRef<typeof Progress.CircleSnail>,
      keyof SpinnerVariantProps | "thickness" | "color"
    >,
    SpinnerVariantProps {
  color?: SemanticColor | "white" | "black";
  styles?: {
    wrapper?: ViewStyle;
    spinner?: ViewStyle;
  };
}

export const Spinner = forwardRef<
  ElementRef<typeof Progress.CircleSnail>,
  SpinnerProps
>((originalProps, ref) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    spinnerStyle.variantKeys,
  );

  const { styles, style, color = "primary", ...otherProps } = props;
  const { size = "md" } = variantProps;

  const slots = useMemo(() => spinnerStyle({ size }), [size]);

  return (
    <View style={[slots.wrapper(), styles?.wrapper, style]}>
      <Progress.CircleSnail
        indeterminate
        ref={ref}
        {...otherProps}
        style={[slots.spinner(), styles?.spinner]}
        color={match(color)
          .with(P.union("white", "black"), (color) => colors[color])
          .otherwise((color) => colors.light[color].DEFAULT)}
        size={pipe(
          O.fromNullable(slots.spinner().width),
          O.map(Number),
          O.toUndefined,
        )}
        thickness={match(size)
          .with("sm", () => 2.5)
          .with("md", () => 3.5)
          .with("lg", () => 4)
          .exhaustive()}
      />
    </View>
  );
});
