import { createTheme } from "@mui/material";
import colors from "assets/scss/_theme-vars.module.scss";
import palette from "./palette";
import typography from "./typography";
export function themeConfig(customization) {
  const theme = {
    colors,
    customization,
    heading: colors.secondary4,
  };
  return createTheme({
    palette: palette(theme),
    typography: typography(theme),
  });
}
