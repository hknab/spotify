import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Controls from "components/molecules/player/Controls";
import TimeLine from "components/molecules/player/TimeLine";
import Adjust from "components/molecules/player/Adjust";
function PlayerSkeleton() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "0 16px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "243px" }}>
        <Skeleton
          variant="rectangular"
          height="48px"
          width="48px"
          sx={{ marginRight: "10px" }}
        />
        <Skeleton variant="text" width="150px" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          minWidth: "min-content",
          width: "560px",
          "& > *:nth-child(1)": {
            marginBottom: "10px",
          },
        }}
      >
        <Box
          sx={{
            width: "180px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton variant="circular" width="25px" height="25px" />
          <Skeleton variant="circular" width="25px" height="25px" />
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton variant="circular" width="25px" height="25px" />
          <Skeleton variant="circular" width="25px" height="25px" />
        </Box>

        <Skeleton variant="text" width="100%" />
      </Box>
      <Box
        sx={{
          width: "230px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Skeleton variant="circular" width="20px" height="20px" />
        <Skeleton variant="circular" width="20px" height="20px" />
        <Skeleton variant="circular" width="20px" height="20px" />
        <Skeleton variant="text" width="72px" />
        <Skeleton variant="circular" width="20px" height="20px" />
        <Skeleton variant="circular" width="20px" height="20px" />
      </Box>
    </Box>
  );
}

export default PlayerSkeleton;
