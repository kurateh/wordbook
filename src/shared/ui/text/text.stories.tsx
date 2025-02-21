import { type StoryObj, type Meta } from "@storybook/react";
import { View } from "react-native";

import { Text, type TextProps } from "./text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    font: {
      control: {
        type: "select",
      },
      options: ["pretendard", "zen-old-mincho"],
    },
  },
  args: {
    children: "다람쥐 헌 쳇바퀴에 타고파",
    font: "pretendard",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ weight, ...props }) => (
    <View style={{ flexDirection: "column", gap: 8 }}>
      {(
        [
          "thin",
          "extralight",
          "light",
          "regular",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ] satisfies TextProps["weight"][]
      ).map((weight) => (
        <View key={weight} style={{ flexDirection: "row", gap: 8 }}>
          <Text style={{ width: 80 }} weight={weight}>
            {weight.charAt(0).toUpperCase() + weight.slice(1)}
          </Text>
          <Text {...props} weight={weight} />
        </View>
      ))}
    </View>
  ),
};
