import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PlayerContext from "context/PlayerContext";
import ContextProvider from "context";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "themes";
const queryClient = new QueryClient();

const customizations = {
  mode: "dark",
};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themeConfig(customizations)}>
            <PlayerContext>
              <App />
            </PlayerContext>
          </ThemeProvider>
        </QueryClientProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
