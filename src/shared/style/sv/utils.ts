import { type DeterminedStyle, type Style } from "~/shared/style/types";

import { type StyleValue } from ".";

export const mergeStyleValues = <S extends Style>(
  ...styles: StyleValue<S>[]
): DeterminedStyle<S> =>
  styles.reduce((acc, style) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ([null, false, 0, 0n].includes(style as any)) {
      return acc;
    }

    if (Array.isArray(style)) {
      return mergeStyleValues(acc, ...style);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { ...acc, ...style } as any;
  }, {}) as unknown as DeterminedStyle<S>;
