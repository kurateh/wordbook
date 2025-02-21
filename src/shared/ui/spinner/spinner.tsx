import { type ComponentPropsWithRef, type ElementRef, forwardRef } from "react";
import { View, type ViewStyle } from "react-native";
import * as Progress from "react-native-progress";
import { useStyles } from "react-native-unistyles";
import { match, P } from "ts-pattern";

import { type SemanticColor } from "~/shared/style/colors";

import { spinnerStylesheet, type SpinnerVariantProps } from "./style";

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
>(({ size = "md", color = "primary", styles, ...props }, ref) => {
  const { styles: slots, theme } = useStyles(spinnerStylesheet);

  return (
    <View style={[slots.wrapper({ size }), styles?.wrapper, props.style]}>
      <Progress.CircleSnail
        indeterminate
        ref={ref}
        {...props}
        style={[slots.spinner({ size }), styles?.spinner]}
        color={match(color)
          .with(P.union("white", "black"), (color) => theme.colors[color])
          .otherwise((color) => theme.colors[color].DEFAULT)}
        size={slots.spinner({ size }).width}
        thickness={match(size)
          .with("sm", () => 2.5)
          .with("md", () => 3.5)
          .with("lg", () => 4)
          .exhaustive()}
      />
    </View>
  );
});
