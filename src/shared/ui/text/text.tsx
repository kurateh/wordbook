import { type ElementRef, forwardRef, useMemo } from "react";
import {
  // eslint-disable-next-line no-restricted-imports
  Text as TextOrig,
  // eslint-disable-next-line no-restricted-imports
  type TextProps as TextPropsOrig,
} from "react-native";

import { mapPropsVariants } from "~/shared/style/utils";

import { textStyles, type TextVariants } from "./style";

export interface TextProps extends TextPropsOrig, TextVariants {}

export const Text = forwardRef<ElementRef<typeof TextOrig>, TextProps>(
  (originalProps, ref) => {
    const [props, variantProps] = mapPropsVariants(
      originalProps,
      textStyles.variantKeys,
    );

    const { style, ...otherProps } = props;
    const { font, weight } = variantProps;

    const baseStyle = useMemo(
      () => textStyles({ font, weight }),
      [font, weight],
    );

    return <TextOrig ref={ref} {...otherProps} style={[baseStyle, style]} />;
  },
);
