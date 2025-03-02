import type { Preview } from "@storybook/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <GestureHandlerRootView
        style={{ flex: 1, marginTop: 60, alignItems: "center" }}
      >
        <Story />
      </GestureHandlerRootView>
    ),
  ],
};

export default preview;
