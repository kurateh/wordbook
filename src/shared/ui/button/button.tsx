// "use client";
// import { createButton } from "@gluestack-ui/button";
// import { PrimitiveIcon, UIIcon } from "@gluestack-ui/icon";
// import type { VariantProps } from "@gluestack-ui/nativewind-utils";
// import { useStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
// import { type ButtonVariantProps } from "@heroui/theme";
// import { pick } from "lodash-es";
// import { cssInterop } from "nativewind";
// import React, {
//   type ComponentPropsWithoutRef,
//   type ComponentProps,
// } from "react";
// import { ActivityIndicator, View } from "react-native";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
// } from "react-native-reanimated";

// import { createContext } from "~/shared/context";
// import { mapPropsVariants } from "~/shared/style/utils";
// import { Text } from "~/shared/ui/text";

// import {
//   buttonGroupStyle,
//   buttonIconStyle,
//   buttonStyle,
//   buttonTextStyle,
// } from "./style";

// const SCOPE = "BUTTON";

// const [ButtonContextProvider, useButtonContext] =
//   createContext<ButtonVariantProps>({
//     name: "Button",
//   });

// const UIButton = createButton({
//   Root: View,
//   Text,
//   Group: View,
//   Spinner: ActivityIndicator,
//   Icon: UIIcon,
// });

// cssInterop(PrimitiveIcon, {
//   className: {
//     target: "style",
//     nativeStyleToProp: {
//       height: true,
//       width: true,
//       fill: true,
//       color: "classNameColor",
//       stroke: true,
//     },
//   },
// });

// cssInterop(Animated.View, {
//   className: {
//     target: "style",
//   },
// });

// type ButtonProps = Omit<ComponentPropsWithoutRef<typeof View>, "context"> &
//   VariantProps<typeof buttonStyle> & { className?: string };

// const Button = React.forwardRef<React.ElementRef<typeof View>, ButtonProps>(
//   (originalProps, ref) => {
//     const pressed = useSharedValue(false);

//     const tap = Gesture.Tap()
//       .onBegin(() => {
//         pressed.value = true;
//       })
//       .onFinalize(() => {
//         pressed.value = false;
//       });

//     const animatedStyles = useAnimatedStyle(() => ({
//       transform: [
//         {
//           scale: pressed.value ? 0.97 : 1,
//         },
//       ],
//     }));

//     const [props, variantProps] = mapPropsVariants(
//       originalProps,
//       buttonStyle.variantKeys,
//       true,
//     );

//     return (
//       <ButtonContextProvider value={variantProps}>
//         <GestureDetector gesture={tap}>
//           <Animated.View
//             ref={ref}
//             {...props}
//             className={buttonStyle({ ...variantProps, class: props.className })}
//             style={animatedStyles}
//           />
//         </GestureDetector>
//       </ButtonContextProvider>
//     );
//   },
// );

// type ButtonTextProps = ComponentPropsWithoutRef<typeof UIButton.Text> &
//   VariantProps<typeof buttonTextStyle> & { className?: string };

// const ButtonText = React.forwardRef<
//   React.ElementRef<typeof UIButton.Text>,
//   ButtonTextProps
// >(({ className, ...props }, ref) => {
//   const buttonTextVariants = pick(
//     useButtonContext(),
//     buttonTextStyle.variantKeys,
//   );

//   return (
//     <UIButton.Text
//       ref={ref}
//       {...props}
//       className={buttonTextStyle({
//         ...buttonTextVariants,
//         class: className,
//       })}
//     />
//   );
// });

// const ButtonSpinner = UIButton.Spinner;

// type IButtonIcon = React.ComponentPropsWithoutRef<typeof UIButton.Icon> &
//   VariantProps<typeof buttonIconStyle> & {
//     className?: string | undefined;
//     as?: React.ElementType;
//     height?: number;
//     width?: number;
//   };

// const ButtonIcon = React.forwardRef<
//   React.ElementRef<typeof UIButton.Icon>,
//   IButtonIcon
// >(({ className, size, ...props }, ref) => {
//   const {
//     variant: parentVariant,
//     size: parentSize,
//     action: parentAction,
//   } = useStyleContext(SCOPE);

//   if (typeof size === "number") {
//     return (
//       <UIButton.Icon
//         ref={ref}
//         {...props}
//         className={buttonIconStyle({ class: className })}
//         size={size}
//       />
//     );
//   } else if (
//     (props.height !== undefined || props.width !== undefined) &&
//     size === undefined
//   ) {
//     return (
//       <UIButton.Icon
//         ref={ref}
//         {...props}
//         className={buttonIconStyle({ class: className })}
//       />
//     );
//   }
//   return (
//     <UIButton.Icon
//       {...props}
//       className={buttonIconStyle({
//         parentVariants: {
//           size: parentSize,
//           variant: parentVariant,
//           action: parentAction,
//         },
//         size,
//         class: className,
//       })}
//       ref={ref}
//     />
//   );
// });

// type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
//   VariantProps<typeof buttonGroupStyle>;

// const ButtonGroup = React.forwardRef<
//   React.ElementRef<typeof UIButton.Group>,
//   IButtonGroupProps
// >(
//   (
//     {
//       className,
//       space = "md",
//       isAttached = false,
//       flexDirection = "column",
//       ...props
//     },
//     ref,
//   ) => {
//     return (
//       <UIButton.Group
//         className={buttonGroupStyle({
//           class: className,
//           space,
//           isAttached,
//           flexDirection,
//         })}
//         {...props}
//         ref={ref}
//       />
//     );
//   },
// );

// Button.displayName = "Button";
// ButtonText.displayName = "ButtonText";
// ButtonSpinner.displayName = "ButtonSpinner";
// ButtonIcon.displayName = "ButtonIcon";
// ButtonGroup.displayName = "ButtonGroup";

// export type ButtonSpinnerProps = ComponentProps<typeof ButtonSpinner>;
// export type ButtonIconProps = ComponentProps<typeof ButtonIcon>;
// export type ButtonGroupProps = ComponentProps<typeof ButtonGroup>;

// export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
