import { theme } from "@chakra-ui/core";

export const defaultResponsiveMargin = { base: 2, sm: 3, lg: 5 };

export default {
  ...theme,
  colors: {
    brand: {
      accent: theme.colors.green[400],
      light: "white",
      mediumlight: "#eaeaea",
      mediumdark: "#2e2e2e",
      dark: "black",
      opaquelight: "#e2e8f02e",
      opaquedark: "#00000036",
    },
    ...theme.colors,
  },
};
