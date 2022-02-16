import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import CardSkeleton from "./CardSkeleton";
function PlaylistCardRowSkeleton() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Skeleton variant="text" sx={{ height: "50px", width: "200px" }} />
      <Box
    sx={{
          marginTop: "16px",
          display: "grid",
          gridAutoRows: 0,
          gridTemplateRows: "1fr",
          overflow: "hidden",
          gridGap: "24px",
          gridTemplateColumns: "repeat(auto-fill ,minMax(178px , 1fr))",
          maxHeight: "246px",
        }}
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </Box>
    </Box>
  );
}
export default PlaylistCardRowSkeleton;

