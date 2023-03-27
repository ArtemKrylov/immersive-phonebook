import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "280px",
  md: "768px",
  lg: "1200px",
  xl: "1600px",
};

const colors = {
  accent: "purple.700",
  headerGradient: "linear-gradient(to right, #1cd8d2, #93edc7)",
};

const fonts = {};

export const theme = extendTheme({ breakpoints, fonts, colors });
