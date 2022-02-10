import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
import CssBaseline from "@mui/material/CssBaseline";
import "assets/scss/global.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeRoutes from "routes";
import { BrowserRouter } from "react-router-dom";
import PlayerContext from "context/PlayerContext";

const queryClient = new QueryClient();

const customizations = {
  mode: "dark",
};
// slice of global state

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themeConfig(customizations)}>
          <PlayerContext>
            <CssBaseline />
            <ThemeRoutes />
            <ReactQueryDevtools />
          </PlayerContext>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
