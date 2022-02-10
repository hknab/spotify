import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
function UserAvatarSkeleton() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "113px",
        height: "46px",
        padding: " 4px 16px 4px 8px",
        backgroundColor: "secondary.3",
        borderRadius: "80px",
        userSelect: "none",
      }}
    >
      <Skeleton variant="circular" height="36px" width="36px" />
      <Skeleton variant="text" sx={{ flexGrow: 1, marginLeft: "8px" }} />
    </Box>
  );
}

export default UserAvatarSkeleton;
