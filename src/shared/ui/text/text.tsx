/* eslint-disable no-restricted-imports */
import { type ElementRef, forwardRef } from "react";
import {
  Text as TextOrig,
  type TextProps as TextPropsOrig,
} from "react-native";
import { useStyles } from "react-native-unistyles";

import { textStylesheet, type TextVariants } from "./style";

export interface TextProps extends TextPropsOrig, TextVariants {}

export const Text = forwardRef<ElementRef<typeof TextOrig>, TextProps>(
  ({ style, weight = "medium", font = "pretendard", ...props }, ref) => {
    const { styles } = useStyles(textStylesheet);

    return (
      <TextOrig
        ref={ref}
        {...props}
        style={[styles.base({ font, weight }), style]}
      />
    );
  },
);
