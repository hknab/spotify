import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
import CssBaseline from "@mui/material/CssBaseline";
import PlayerContext from "context/PlayerContext";
import MainLayout from "layout/main";
import 'assets/scss/global.scss';
// import Molecules from "components/molecules/index";
import {  QueryClientProvider , QueryClient} from "react-query";

const queryClient = new QueryClient();


const customizations = {
  mode: "dark",
};
// slice of global state

function App() {
  return (
      <QueryClientProvider client={queryClient}>
    <PlayerContext>
      <ThemeProvider theme={themeConfig(customizations)}>
        <CssBaseline />
        <MainLayout />
        {/* <Molecules /> */}
      </ThemeProvider>
    </PlayerContext>
      </QueryClientProvider>
  );
}

export default App;
