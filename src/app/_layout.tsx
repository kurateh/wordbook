import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "~/shared/style/unistyles";

function App() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppEntryPoint = require("../../.storybook").default;
}

export default AppEntryPoint;
