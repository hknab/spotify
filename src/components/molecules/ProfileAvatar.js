import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
//fake data
import UserAvatar from "fake-data/user-avatar.jpg";
const userName = "Kıvılcım";
const userAvatar = UserAvatar;

function ProfileAvatar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "113px",
        height: "46px",
        padding: " 4px 16px 4px 8px",
        backgroundColor: "secondary.3",
        borderRadius: "80px",
      }}
    >
      <Avatar
        src={userAvatar}
        sx={{
          width: "36px",
          height: "36px",
          border: "1px solid",
          borderColor: "primary.main",
        }}
      />
      <Typography variant="body2">{userName}</Typography>
    </Box>
  );
}

export default ProfileAvatar;
