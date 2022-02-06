import { createTheme } from "@mui/material";
import colors from "assets/scss/_theme-vars.module.scss";
import palette from "./palette";
import typography from "./typography";
import components from "./components";
export function themeConfig(customization) {
  const theme = {
    colors,
    customization,
    heading: colors.secondary4,
  };
  return createTheme({
    palette: palette(theme),
    typography: typography(theme),
    components: components(theme)
  });
}
