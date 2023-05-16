import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "280px",
  md: "768px",
  lg: "1200px",
  xl: "1600px",
};

const colors = {
  accent: {
    300: "#805AEE",
    500: "#805AD5",
    700: "#3B2A6B",
  },
  accent2: {
    700: "#805AD5",
  },
  error: "#d00000",
  headerGradient: "linear-gradient(to right, #1cd8d2, #93edc7)",
};

const shadows = {
  accentTextShadow2: "1px 1px 1px #805AD5",
};

const fonts = {
  headerFont: "'Lora', serif",
  contactsFont: "'Alkatra', cursive",
};

export const theme = extendTheme({ breakpoints, fonts, colors, shadows });
