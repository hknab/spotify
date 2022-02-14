import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
function LinearLoader() {
  return (
    <Box
      sx={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 999 }}
    >
      <LinearProgress color="primary" variant="indeterminate" />
    </Box>
  );
}

export default LinearLoader;
