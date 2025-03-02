import { isEmpty } from "lodash-es";

import { mergeStyleValues } from "./utils";

const booleanToString = (value) =>
  value === true ? "true" : value === false ? "false" : value;

export const sv = (options) => {
  const {
    base,
    slots = {},
    variants = {},
    compoundVariants = [],
    defaultVariants = {},
  } = options ?? {};

  const slotKeys = Object.keys(slots);
  const isSlotEmpty = isEmpty(slots);

  const getSelectedVariantStyles = (variantValues) =>
    Object.entries(variantValues)
      .map(([key, value]) => variants[key]?.[booleanToString(value)])
      .filter((v) => !!v);

  const getSelectedCompoundVariantStyles = (variantValues) =>
    compoundVariants
      .filter((cv) =>
        Object.entries(cv).every(
          ([key, value]) => key === "style" || value === variantValues[key],
        ),
      )
      .map((cv) => cv.style);

  const component = (props) => {
    if (isEmpty(variants) && isSlotEmpty) {
      return mergeStyleValues(base);
    }

    const variantValues = { ...defaultVariants, ...props };

    if (isEmpty(slots)) {
      const selectedVariantStyles = getSelectedVariantStyles(variantValues);

      const selectedCompoundStyles =
        getSelectedCompoundVariantStyles(variantValues);

      return mergeStyleValues(
        base,
        selectedVariantStyles,
        selectedCompoundStyles,
      );
    }

    return Object.fromEntries(
      slotKeys.map((slotKey) => {
        const base = slots[slotKey];

        const fn = (variantProps) => {
          const selectedVariantSlots = getSelectedVariantStyles({
            ...variantValues,
            ...variantProps,
          }).map((slots) => slots[slotKey]);

          const selectedCompoundSlots = getSelectedCompoundVariantStyles({
            ...variantValues,
            ...variantProps,
          }).map((slots) => slots[slotKey]);

          return mergeStyleValues(
            base,
            selectedVariantSlots,
            selectedCompoundSlots,
          );
        };

        return [slotKey, fn];
      }),
    );
  };

  component.base = base;
  component.slotKeys = isSlotEmpty ? undefined : slotKeys;
  component.slots = isSlotEmpty ? undefined : slots;
  component.variants = variants;
  component.compoundVariants = compoundVariants;
  component.defaultVariants = defaultVariants;
  component.variantKeys = Object.keys(variants);

  return component;
};
