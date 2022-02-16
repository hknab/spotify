import React from "react";
import Box from "@mui/material/Box";
import PlayActions from "./PlayActions";
import Filters from "./Filters";
function PlaylistActionBar({ data }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 64px",
      }}
    >
      <PlayActions data={data} />
      <Filters />
    </Box>
  );
}

export default PlaylistActionBar;
