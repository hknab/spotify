import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function CardSkeleton() {
  return (
    <Box
      sx={{
        padding: "8px",
        width: "176px",
        backgroundColor: "#B3B3B31A",
        transition: "all .2s ease-in-out",
        borderRadius: "8px",
        cursor: "pointer",
        maxHeight: "246px",
      }}
    >
      <Skeleton
        sx={{
          borderRadius: "8px",
          width: "160px",
          height: "160px",
        }}
        variant=""
      />
      <Skeleton
        variant="text"
        sx={{
          marginTop: "16px",
          height: "20px",
          width: "90%",
        }}
      />
    </Box>
  );
}

export default CardSkeleton;
