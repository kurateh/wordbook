import { type StoryObj, type Meta } from "@storybook/react";
import { View } from "react-native";

import { Text } from "~/shared/ui/text";

import { Spinner, type SpinnerProps } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "white",
        "black",
      ],
    },
    animating: {
      control: {
        type: "boolean",
      },
    },
    duration: {
      control: {
        type: "number",
      },
    },
    spinDuration: {
      control: {
        type: "number",
      },
    },
    strokeCap: {
      control: {
        type: "select",
      },
      options: ["butt", "square", "round"],
    },
  },
  args: {
    color: "primary",
    animating: true,
    duration: 1000,
    spinDuration: 5000,
    strokeCap: "round",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ color, ...props }) => (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
      }}
    >
      {(["sm", "md", "lg"] satisfies SpinnerProps["size"][]).map((size) => (
        <View
          key={size}
          style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
        >
          <Text style={{ width: 24, textAlign: "right" }}>{size}</Text>
          <Spinner {...props} color={color} size={size} />
        </View>
      ))}
    </View>
  ),
};
