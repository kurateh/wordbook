import { constOf } from "~/shared/function";

import { type ColorScale } from "./types";

const blue = constOf({
  50: "#e6f1fe",
  100: "#cce3fd",
  200: "#99c7fb",
  300: "#66aaf9",
  400: "#338ef7",
  500: "#006FEE",
  600: "#005bc4",
  700: "#004493",
  800: "#002e62",
  900: "#001731",
}) satisfies ColorScale;

const green = constOf({
  50: "#e8faf0",
  100: "#d1f4e0",
  200: "#a2e9c1",
  300: "#74dfa2",
  400: "#45d483",
  500: "#17c964",
  600: "#12a150",
  700: "#0e793c",
  800: "#095028",
  900: "#052814",
}) satisfies ColorScale;

const cyan = constOf({
  50: "#F0FCFF",
  100: "#E6FAFE",
  200: "#D7F8FE",
  300: "#C3F4FD",
  400: "#A5EEFD",
  500: "#7EE7FC",
  600: "#06B7DB",
  700: "#09AACD",
  800: "#0E8AAA",
  900: "#053B48",
}) satisfies ColorScale;

const pink = constOf({
  50: "#ffedfa",
  100: "#ffdcf5",
  200: "#ffb8eb",
  300: "#ff95e1",
  400: "#ff71d7",
  500: "#ff4ecd",
  600: "#cc3ea4",
  700: "#992f7b",
  800: "#661f52",
  900: "#331029",
}) satisfies ColorScale;

const purple = constOf({
  50: "#f2eafa",
  100: "#e4d4f4",
  200: "#c9a9e9",
  300: "#ae7ede",
  400: "#9353d3",
  500: "#7828c8",
  600: "#6020a0",
  700: "#481878",
  800: "#301050",
  900: "#180828",
}) satisfies ColorScale;

const red = constOf({
  50: "#fee7ef",
  100: "#fdd0df",
  200: "#faa0bf",
  300: "#f871a0",
  400: "#f54180",
  500: "#f31260",
  600: "#c20e4d",
  700: "#920b3a",
  800: "#610726",
  900: "#310413",
}) satisfies ColorScale;

const yellow = constOf({
  50: "#fefce8",
  100: "#fdedd3",
  200: "#fbdba7",
  300: "#f9c97c",
  400: "#f7b750",
  500: "#f5a524",
  600: "#c4841d",
  700: "#936316",
  800: "#62420e",
  900: "#312107",
}) satisfies ColorScale;

const zinc = constOf({
  "50": "#fafafa",
  "100": "#f4f4f5",
  "200": "#e4e4e7",
  "300": "#d4d4d8",
  "400": "#a1a1aa",
  "500": "#71717a",
  "600": "#52525b",
  "700": "#3f3f46",
  "800": "#27272a",
  "900": "#18181b",
}) satisfies ColorScale;

export const commonColors = {
  white: "#ffffff",
  black: "#000000",
  blue,
  green,
  pink,
  purple,
  red,
  yellow,
  cyan,
  zinc,
} as const;

export type CommonColors = typeof commonColors;
