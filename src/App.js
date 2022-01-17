import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
import Typography from "@mui/material/Typography";
import gradient from "util/gradient";
import CssBaseline from "@mui/material/CssBaseline";
const customizations = {
  mode: "light",
};
// slice of global state

function App() {
  return (
    <ThemeProvider theme={themeConfig(customizations)}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
