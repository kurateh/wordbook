// import type { Meta, StoryObj } from "@storybook/react";
// import { type FC, type ReactNode } from "react";

// import { Button, ButtonText } from "./button";

// const meta: Meta<typeof Button> = {
//   title: "UI/Button",
//   component: Button,
//   subcomponents: { ButtonText: ButtonText as FC<unknown> },
//   argTypes: {
//     variant: {
//       control: {
//         type: "select",
//       },
//       options: [
//         "solid",
//         "bordered",
//         "light",
//         "flat",
//         "faded",
//         "shadow",
//         "ghost",
//       ],
//     },
//     color: {
//       control: {
//         type: "select",
//       },
//       options: [
//         "default",
//         "primary",
//         "secondary",
//         "success",
//         "warning",
//         "danger",
//       ],
//     },
//     size: {
//       control: {
//         type: "select",
//       },
//       options: ["sm", "md", "lg"],
//     },
//     fullWidth: {
//       control: {
//         type: "boolean",
//       },
//     },
//     radius: {
//       control: {
//         type: "select",
//       },
//       options: ["none", "sm", "md", "lg", "full"],
//     },
//     isDisabled: {
//       control: {
//         type: "boolean",
//       },
//     },
//     disableAnimation: {
//       control: {
//         type: "boolean",
//       },
//     },
//   },
//   args: {
//     children: "저장하기",
//   },
// };

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   render: ({ children, ...props }) => (
//     <Button {...props}>
//       <ButtonText>{children as ReactNode}</ButtonText>
//     </Button>
//   ),
// };
