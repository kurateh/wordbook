import { type ConfigContext, type ExpoConfig } from "expo/config";

export default ({ config: _ }: ConfigContext): ExpoConfig => ({
  name:
    process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true"
      ? "wordbook-storybook"
      : "wordbook",
  slug:
    process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true"
      ? "wordbook-storybook"
      : "wordbook",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier:
      process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true"
        ? "com.anonymous.wordbook.storybook"
        : "com.anonymous.wordbook",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package:
      process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true"
        ? "com.anonymous.wordbook.storybook"
        : "com.anonymous.wordbook",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/PretendardJP-Thin.otf",
          "./assets/fonts/PretendardJP-ExtraLight.otf",
          "./assets/fonts/PretendardJP-Light.otf",
          "./assets/fonts/PretendardJP-Regular.otf",
          "./assets/fonts/PretendardJP-Medium.otf",
          "./assets/fonts/PretendardJP-SemiBold.otf",
          "./assets/fonts/PretendardJP-Bold.otf",
          "./assets/fonts/PretendardJP-ExtraBold.otf",
          "./assets/fonts/PretendardJP-Black.otf",
        ],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "b5da8182-0981-4fa0-9ade-2de0c1752883",
    },
  },
});
