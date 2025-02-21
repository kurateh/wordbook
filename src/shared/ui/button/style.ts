// import { tva } from "@gluestack-ui/nativewind-utils/tva";
// import { tv } from "@heroui/theme";

// import { collapseAdjacentVariantBorders } from "~/shared/style/classes";
// import { colorVariants } from "~/shared/style/variants";

// export const buttonStyle = tv({
//   base: `group/button box-border min-w-max flex-row items-center justify-center
//   overflow-hidden`,
//   variants: {
//     color: {
//       default: "",
//       primary: "",
//       secondary: "",
//       success: "",
//       warning: "",
//       danger: "",
//     },
//     variant: {
//       solid: "",
//       bordered: "border-medium bg-white",
//       light: "bg-white",
//       flat: "",
//       faded: "border-medium",
//       shadow: "",
//       ghost: "border-medium bg-transparent",
//     },
//     size: {
//       sm: "h-8 min-w-16 gap-2 rounded-small px-3",
//       md: "h-10 min-w-20 gap-2 rounded-medium px-4",
//       lg: "h-12 min-w-24 gap-3 rounded-large px-6",
//     },
//     radius: {
//       none: "rounded-none",
//       sm: "rounded-small",
//       md: "rounded-medium",
//       lg: "rounded-large",
//       full: "rounded-full",
//     },
//     fullWidth: {
//       true: "w-full",
//     },
//     isDisabled: {
//       true: "pointer-events-none opacity-disabled",
//     },
//     isInGroup: {
//       true: "[&:not(:first-child):not(:last-child)]:rounded-none",
//     },
//     isIconOnly: {
//       true: "!gap-0 px-0",
//       false: "[&>svg]:max-w-[theme(spacing.8)]",
//     },
//     disableAnimation: {
//       true: "",
//       false: "",
//     },
//   },
//   defaultVariants: {
//     size: "md",
//     variant: "solid",
//     color: "default",
//     fullWidth: false,
//     isDisabled: false,
//     isInGroup: false,
//     disableAnimation: false,
//   },
//   compoundVariants: [
//     // solid / color
//     {
//       variant: "solid",
//       color: "default",
//       class: colorVariants.solid.default.wrapper,
//     },
//     {
//       variant: "solid",
//       color: "primary",
//       class: colorVariants.solid.primary.wrapper,
//     },
//     {
//       variant: "solid",
//       color: "secondary",
//       class: colorVariants.solid.secondary.wrapper,
//     },
//     {
//       variant: "solid",
//       color: "success",
//       class: colorVariants.solid.success.wrapper,
//     },
//     {
//       variant: "solid",
//       color: "warning",
//       class: colorVariants.solid.warning.wrapper,
//     },
//     {
//       variant: "solid",
//       color: "danger",
//       class: colorVariants.solid.danger.wrapper,
//     },
//     // shadow / color
//     {
//       variant: "shadow",
//       color: "default",
//       class: colorVariants.shadow.default.wrapper,
//     },
//     {
//       variant: "shadow",
//       color: "primary",
//       class: colorVariants.shadow.primary.wrapper,
//     },
//     {
//       variant: "shadow",
//       color: "secondary",
//       class: colorVariants.shadow.secondary.wrapper,
//     },
//     {
//       variant: "shadow",
//       color: "success",
//       class: colorVariants.shadow.success.wrapper,
//     },
//     {
//       variant: "shadow",
//       color: "warning",
//       class: colorVariants.shadow.warning.wrapper,
//     },
//     {
//       variant: "shadow",
//       color: "danger",
//       class: colorVariants.shadow.danger.wrapper,
//     },
//     // bordered / color
//     {
//       variant: "bordered",
//       color: "default",
//       class: colorVariants.bordered.default.wrapper,
//     },
//     {
//       variant: "bordered",
//       color: "primary",
//       class: colorVariants.bordered.primary.wrapper,
//     },
//     {
//       variant: "bordered",
//       color: "secondary",
//       class: colorVariants.bordered.secondary.wrapper,
//     },
//     {
//       variant: "bordered",
//       color: "success",
//       class: colorVariants.bordered.success.wrapper,
//     },
//     {
//       variant: "bordered",
//       color: "warning",
//       class: colorVariants.bordered.warning.wrapper,
//     },
//     {
//       variant: "bordered",
//       color: "danger",
//       class: colorVariants.bordered.danger.wrapper,
//     },
//     // flat / color
//     {
//       variant: "flat",
//       color: "default",
//       class: colorVariants.flat.default.wrapper,
//     },
//     {
//       variant: "flat",
//       color: "primary",
//       class: colorVariants.flat.primary.wrapper,
//     },
//     {
//       variant: "flat",
//       color: "secondary",
//       class: colorVariants.flat.secondary.wrapper,
//     },
//     {
//       variant: "flat",
//       color: "success",
//       class: colorVariants.flat.success.wrapper,
//     },
//     {
//       variant: "flat",
//       color: "warning",
//       class: colorVariants.flat.warning.wrapper,
//     },
//     {
//       variant: "flat",
//       color: "danger",
//       class: colorVariants.flat.danger.wrapper,
//     },
//     // faded / color
//     {
//       variant: "faded",
//       color: "default",
//       class: colorVariants.faded.default.wrapper,
//     },
//     {
//       variant: "faded",
//       color: "primary",
//       class: colorVariants.faded.primary.wrapper,
//     },
//     {
//       variant: "faded",
//       color: "secondary",
//       class: colorVariants.faded.secondary.wrapper,
//     },
//     {
//       variant: "faded",
//       color: "success",
//       class: colorVariants.faded.success.wrapper,
//     },
//     {
//       variant: "faded",
//       color: "warning",
//       class: colorVariants.faded.warning.wrapper,
//     },
//     {
//       variant: "faded",
//       color: "danger",
//       class: colorVariants.faded.danger.wrapper,
//     },
//     // light / color
//     {
//       variant: "light",
//       color: "default",
//       class: [
//         colorVariants.light.default.wrapper,
//         "data-[hover=true]:bg-default/40",
//       ],
//     },
//     {
//       variant: "light",
//       color: "primary",
//       class: [
//         colorVariants.light.primary.wrapper,
//         "data-[hover=true]:bg-primary/20",
//       ],
//     },
//     {
//       variant: "light",
//       color: "secondary",
//       class: [
//         colorVariants.light.secondary.wrapper,
//         "data-[hover=true]:bg-secondary/20",
//       ],
//     },
//     {
//       variant: "light",
//       color: "success",
//       class: [
//         colorVariants.light.success.wrapper,
//         "data-[hover=true]:bg-success/20",
//       ],
//     },
//     {
//       variant: "light",
//       color: "warning",
//       class: [
//         colorVariants.light.warning.wrapper,
//         "data-[hover=true]:bg-warning/20",
//       ],
//     },
//     {
//       variant: "light",
//       color: "danger",
//       class: [
//         colorVariants.light.danger.wrapper,
//         "data-[hover=true]:bg-danger/20",
//       ],
//     },
//     // ghost / color
//     {
//       variant: "ghost",
//       color: "default",
//       class: [
//         colorVariants.ghost.default.wrapper,
//         "data-[hover=true]:!bg-default",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "primary",
//       class: [
//         colorVariants.ghost.primary.wrapper,
//         "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "secondary",
//       class: [
//         colorVariants.ghost.secondary.wrapper,
//         "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "success",
//       class: [
//         colorVariants.ghost.success.wrapper,
//         "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "warning",
//       class: [
//         colorVariants.ghost.warning.wrapper,
//         "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "danger",
//       class: [
//         colorVariants.ghost.danger.wrapper,
//         "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground",
//       ],
//     },
//     // isInGroup / radius / size <-- radius not provided
//     {
//       isInGroup: true,
//       class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
//     },
//     {
//       isInGroup: true,
//       size: "sm",
//       class: "rounded-none first:rounded-s-small last:rounded-e-small",
//     },
//     {
//       isInGroup: true,
//       size: "md",
//       class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
//     },
//     {
//       isInGroup: true,
//       size: "lg",
//       class: "rounded-none first:rounded-s-large last:rounded-e-large",
//     },
//     // isInGroup / radius <-- radius provided
//     {
//       isInGroup: true,
//       radius: "none",
//       class: "rounded-none first:rounded-s-none last:rounded-e-none",
//     },
//     {
//       isInGroup: true,
//       radius: "sm",
//       class: "rounded-none first:rounded-s-small last:rounded-e-small",
//     },
//     {
//       isInGroup: true,
//       radius: "md",
//       class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
//     },
//     {
//       isInGroup: true,
//       radius: "lg",
//       class: "rounded-none first:rounded-s-large last:rounded-e-large",
//     },
//     {
//       isInGroup: true,
//       radius: "full",
//       class: "rounded-none first:rounded-s-full last:rounded-e-full",
//     },
//     // isInGroup / bordered / ghost
//     {
//       isInGroup: true,
//       variant: ["ghost", "bordered"],
//       color: "default",
//       className: collapseAdjacentVariantBorders.default,
//     },
//     {
//       isInGroup: true,
//       variant: ["ghost", "bordered"],
//       color: "primary",
//       className: collapseAdjacentVariantBorders.primary,
//     },
//     {
//       isInGroup: true,
//       variant: ["ghost", "bordered"],
//       color: "secondary",
//       className: collapseAdjacentVariantBorders.secondary,
//     },
//     {
//       isInGroup: true,
//       variant: ["ghost", "bordered"],
//       color: "success",
//       className: collapseAdjacentVariantBorders.success,
//     },
//     {
//       isInGroup: true,
//       variant: ["ghost", "bordered"],
//       color: "warning",
//       className: collapseAdjacentVariantBorders.warning,
//     },
//     {
//       isInGroup: true,
//       variant: ["ghost", "bordered"],
//       color: "danger",
//       className: collapseAdjacentVariantBorders.danger,
//     },
//     {
//       isIconOnly: true,
//       size: "sm",
//       class: "h-8 w-8 min-w-8",
//     },
//     {
//       isIconOnly: true,
//       size: "md",
//       class: "h-10 w-10 min-w-10",
//     },
//     {
//       isIconOnly: true,
//       size: "lg",
//       class: "h-12 w-12 min-w-12",
//     },
//     // variant / hover
//     {
//       variant: ["solid", "faded", "flat", "bordered", "shadow"],
//       class: "data-[hover=true]:opacity-hover",
//     },
//   ],
// });

// export const buttonTextStyle = tv({
//   base: "whitespace-nowrap font-medium",
//   variants: {
//     color: {
//       default: "",
//       primary: "",
//       secondary: "",
//       success: "",
//       warning: "",
//       danger: "",
//     },
//     variant: {
//       solid: "",
//       bordered: "",
//       light: "",
//       flat: "",
//       faded: "",
//       shadow: "",
//       ghost: "",
//     },
//     size: {
//       sm: "text-tiny",
//       md: "text-small",
//       lg: "text-medium",
//     },
//   },
//   compoundVariants: [
//     // solid / color
//     {
//       variant: "solid",
//       color: "default",
//       class: colorVariants.solid.default.text,
//     },
//     {
//       variant: "solid",
//       color: "primary",
//       class: colorVariants.solid.primary.text,
//     },
//     {
//       variant: "solid",
//       color: "secondary",
//       class: colorVariants.solid.secondary.text,
//     },
//     {
//       variant: "solid",
//       color: "success",
//       class: colorVariants.solid.success.text,
//     },
//     {
//       variant: "solid",
//       color: "warning",
//       class: colorVariants.solid.warning.text,
//     },
//     {
//       variant: "solid",
//       color: "danger",
//       class: colorVariants.solid.danger.text,
//     },
//     // shadow / color
//     {
//       variant: "shadow",
//       color: "default",
//       class: colorVariants.shadow.default.text,
//     },
//     {
//       variant: "shadow",
//       color: "primary",
//       class: colorVariants.shadow.primary.text,
//     },
//     {
//       variant: "shadow",
//       color: "secondary",
//       class: colorVariants.shadow.secondary.text,
//     },
//     {
//       variant: "shadow",
//       color: "success",
//       class: colorVariants.shadow.success.text,
//     },
//     {
//       variant: "shadow",
//       color: "warning",
//       class: colorVariants.shadow.warning.text,
//     },
//     {
//       variant: "shadow",
//       color: "danger",
//       class: colorVariants.shadow.danger.text,
//     },
//     // bordered / color
//     {
//       variant: "bordered",
//       color: "default",
//       class: colorVariants.bordered.default.text,
//     },
//     {
//       variant: "bordered",
//       color: "primary",
//       class: colorVariants.bordered.primary.text,
//     },
//     {
//       variant: "bordered",
//       color: "secondary",
//       class: colorVariants.bordered.secondary.text,
//     },
//     {
//       variant: "bordered",
//       color: "success",
//       class: colorVariants.bordered.success.text,
//     },
//     {
//       variant: "bordered",
//       color: "warning",
//       class: colorVariants.bordered.warning.text,
//     },
//     {
//       variant: "bordered",
//       color: "danger",
//       class: colorVariants.bordered.danger.text,
//     },
//     // flat / color
//     {
//       variant: "flat",
//       color: "default",
//       class: colorVariants.flat.default.text,
//     },
//     {
//       variant: "flat",
//       color: "primary",
//       class: colorVariants.flat.primary.text,
//     },
//     {
//       variant: "flat",
//       color: "secondary",
//       class: colorVariants.flat.secondary.text,
//     },
//     {
//       variant: "flat",
//       color: "success",
//       class: colorVariants.flat.success.text,
//     },
//     {
//       variant: "flat",
//       color: "warning",
//       class: colorVariants.flat.warning.text,
//     },
//     {
//       variant: "flat",
//       color: "danger",
//       class: colorVariants.flat.danger.text,
//     },
//     // faded / color
//     {
//       variant: "faded",
//       color: "default",
//       class: colorVariants.faded.default.text,
//     },
//     {
//       variant: "faded",
//       color: "primary",
//       class: colorVariants.faded.primary.text,
//     },
//     {
//       variant: "faded",
//       color: "secondary",
//       class: colorVariants.faded.secondary.text,
//     },
//     {
//       variant: "faded",
//       color: "success",
//       class: colorVariants.faded.success.text,
//     },
//     {
//       variant: "faded",
//       color: "warning",
//       class: colorVariants.faded.warning.text,
//     },
//     {
//       variant: "faded",
//       color: "danger",
//       class: colorVariants.faded.danger.text,
//     },
//     // light / color
//     {
//       variant: "light",
//       color: "default",
//       class: colorVariants.light.default.text,
//     },
//     {
//       variant: "light",
//       color: "primary",
//       class: colorVariants.light.primary.text,
//     },
//     {
//       variant: "light",
//       color: "secondary",
//       class: colorVariants.light.secondary.text,
//     },
//     {
//       variant: "light",
//       color: "success",
//       class: colorVariants.light.success.text,
//     },
//     {
//       variant: "light",
//       color: "warning",
//       class: colorVariants.light.warning.text,
//     },
//     {
//       variant: "light",
//       color: "danger",
//       class: colorVariants.light.danger.text,
//     },
//     // ghost / color
//     {
//       variant: "ghost",
//       color: "default",
//       class: colorVariants.ghost.default.text,
//     },
//     {
//       variant: "ghost",
//       color: "primary",
//       class: [
//         colorVariants.ghost.primary.text,
//         "data-[hover=true]:!text-primary-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "secondary",
//       class: [
//         colorVariants.ghost.secondary.text,
//         "data-[hover=true]:!text-secondary-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "success",
//       class: [
//         colorVariants.ghost.success.text,
//         "data-[hover=true]:!text-success-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "warning",
//       class: [
//         colorVariants.ghost.warning.text,
//         "data-[hover=true]:!text-warning-foreground",
//       ],
//     },
//     {
//       variant: "ghost",
//       color: "danger",
//       class: [
//         colorVariants.ghost.danger.text,
//         "data-[hover=true]:!text-danger-foreground",
//       ],
//     },
//   ],
// });

// export const buttonIconStyle = tva({
//   base: "fill-none",
//   parentVariants: {
//     variant: {
//       link: "data-[active=true]:underline data-[hover=true]:underline",
//       outline: "",
//       solid: `text-typography-0 data-[hover=true]:text-typography-0
//       data-[active=true]:text-typography-0`,
//     },
//     size: {
//       xs: "h-3.5 w-3.5",
//       sm: "h-4 w-4",
//       md: "h-[18px] w-[18px]",
//       lg: "h-[18px] w-[18px]",
//       xl: "h-5 w-5",
//     },
//     action: {
//       primary: `text-primary-600 data-[active=true]:text-primary-700
//       data-[hover=true]:text-primary-600`,
//       secondary: `text-typography-500 data-[hover=true]:text-typography-600
//       data-[active=true]:text-typography-700`,
//       positive: `text-success-600 data-[active=true]:text-success-700
//       data-[hover=true]:text-success-600`,

//       negative: `text-error-600 data-[hover=true]:text-error-600
//       data-[active=true]:text-error-700`,
//     },
//   },
//   parentCompoundVariants: [
//     {
//       variant: "solid",
//       action: "primary",
//       class: `text-typography-0 data-[hover=true]:text-typography-0
//       data-[active=true]:text-typography-0`,
//     },
//     {
//       variant: "solid",
//       action: "secondary",
//       class: `text-typography-800 data-[hover=true]:text-typography-800
//       data-[active=true]:text-typography-800`,
//     },
//     {
//       variant: "solid",
//       action: "positive",
//       class: `text-typography-0 data-[hover=true]:text-typography-0
//       data-[active=true]:text-typography-0`,
//     },
//     {
//       variant: "solid",
//       action: "negative",
//       class: `text-typography-0 data-[hover=true]:text-typography-0
//       data-[active=true]:text-typography-0`,
//     },
//   ],
// });

// export const buttonGroupStyle = tva({
//   base: "",
//   variants: {
//     space: {
//       xs: "gap-1",
//       sm: "gap-2",
//       md: "gap-3",
//       lg: "gap-4",
//       xl: "gap-5",
//       "2xl": "gap-6",
//       "3xl": "gap-7",
//       "4xl": "gap-8",
//     },
//     isAttached: {
//       true: "gap-0",
//     },
//     flexDirection: {
//       row: "flex-row",
//       column: "flex-col",
//       "row-reverse": "flex-row-reverse",
//       "column-reverse": "flex-col-reverse",
//     },
//   },
// });

// // export const buttonStyle = tva({
// //   base: "relative",
// //   slots: {
// //     base: `group relative z-0 box-border flex min-w-max select-none appearance-none
// //     items-center justify-center whitespace-nowrap font-medium outline-none`,
// //   },
// // });
