import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "layout/main";
const customizations = {
  mode: "dark",
};
// slice of global state

function App() {
  return (
    <ThemeProvider theme={themeConfig(customizations)}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
