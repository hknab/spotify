import Box from "@mui/material/Box";
import gradient from "util/gradient";
function Content() {
  return <Box sx={{ background: gradient.background, height:"calc(100vh - 96px)"}}></Box>;
}

export default Content;
