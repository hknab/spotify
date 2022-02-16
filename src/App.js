import CssBaseline from "@mui/material/CssBaseline";
import "assets/scss/global.scss";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeRoutes from "routes";

// slice of global state

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeRoutes />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
