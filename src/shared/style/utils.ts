import { type ImageStyle, type TextStyle, type ViewStyle } from "react-native";

import { makeOf } from "~/shared/function";

export function mapPropsVariants<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any>,
  K extends keyof T,
>(
  props: T,
  variantKeys: K[] | undefined,
  removeVariantProps?: false,
): readonly [T, Pick<T, K>];

export function mapPropsVariants<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any>,
  K extends keyof T,
>(
  props: T,
  variantKeys: K[] | undefined,
  removeVariantProps: true,
): readonly [Omit<T, K>, Pick<T, K>];

export function mapPropsVariants<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any>,
  K extends keyof T = never,
  R extends boolean = boolean,
>(
  props: T,
  variantKeys?: K[],
  removeVariantProps?: R,
): readonly [Omit<T, K> | T, Pick<T, K>] {
  if (!variantKeys) {
    return [props, {} as Pick<T, K>];
  }

  const picked = variantKeys.reduce((acc, key) => {
    // Only include the key in `picked` if it exists in `props`
    if (key in props) {
      // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any
      (acc as any)[key] = props[key];
      return acc;
    } else {
      return acc;
    }
  }, {});

  if (removeVariantProps) {
    const omitted = Object.keys(props)
      .filter((key) => !variantKeys.includes(key as K))
      .reduce((acc, key) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-param-reassign
        (acc as any)[key] = props[key as keyof T];
        return acc;
      }, {});

    return [omitted, picked] as [Omit<T, K>, Pick<T, K>];
  } else {
    return [props, picked] as [T, Pick<T, K>];
  }
}

export const viewStyle = makeOf<ViewStyle>();

export const textStyle = makeOf<TextStyle>();

export const imageStyle = makeOf<ImageStyle>();
