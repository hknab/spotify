import React from "react";
import Box from "@mui/material/Box";
import Search from "components/molecules/Search";
import NavigateButton from "components/molecules/NavigateButton";
import NotificationButton from "components/molecules/NotificationButton";
import ProfileAvatar from "components/molecules/ProfileAvatar";
function HeaderBody({ hideSearch, background, children }) {
  const handleBackground = () => {
    if (background) {
      if (background.active) {
        if (background.color) {
          return background.color;
        } else {
          return "secondary.1";
        }
      }
    } else {
      return null;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "78px",
        padding: "16px",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
        transition: "background-color .4s ease-in",
        backgroundColor: handleBackground(),
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "72px",
            justifyContent: "space-between",
            marginRight: "16px",
            padding: "4px",
          }}
        >
          <NavigateButton direction="backward" active={false} />
          <NavigateButton direction="forward" active={true} />
        </Box>
        {!hideSearch && <Search />}
        {background.active && children}
      </Box>
      <Box
        sx={{
          width: "180px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 4px",
        }}
      >
        <ProfileAvatar />
        <NotificationButton />
      </Box>
    </Box>
  );
}

export default HeaderBody;
