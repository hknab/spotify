import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
//fake data
import { useUser } from "hooks/user";
import UserAvatarSkeleton from "skeletons/UserAvatarSkeleton";

function ProfileAvatar() {
  const { data: user, isLoading: userIsLoading } = useUser();
  if (userIsLoading) return <UserAvatarSkeleton />;
  const { name, avatar } = user;
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
      <Avatar
        src={`http://localhost:4000${avatar}`}
        sx={{
          width: "36px",
          height: "36px",
          border: "1px solid",
          borderColor: "primary.main",
        }}
      />
      <Typography variant="body2" sx={{ marginLeft: "8px" }}>
        {name}
      </Typography>
    </Box>
  );
}

export default ProfileAvatar;
