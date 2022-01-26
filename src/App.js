import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
import CssBaseline from "@mui/material/CssBaseline";
import PlayerContext from "context/PlayerContext";
// import MainLayout from "layout/main";
import Molecules from "components/molecules/index";

const customizations = {
  mode: "dark",
};
// slice of global state

function App() {
  return (
    <PlayerContext>
      <ThemeProvider theme={themeConfig(customizations)}>
        <CssBaseline />
        {/* <MainLayout /> */}
        <Molecules />
      </ThemeProvider>
    </PlayerContext>
  );
}

export default App;
