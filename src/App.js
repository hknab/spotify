import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "layout/main";
import Skeletons from "skeletons";
const customizations = {
  mode: "dark",
};
// slice of global state

function App() {
  return (
    <ThemeProvider theme={themeConfig(customizations)}>
      <CssBaseline />
      <MainLayout />
      {/* <Skeletons /> */}
    </ThemeProvider>
  );
}

export default App;
