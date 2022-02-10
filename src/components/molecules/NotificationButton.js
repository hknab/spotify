import React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { ReactComponent as NotificationIcon } from "assets/icons/notification.svg";
//fake data
const invisibleBadge = false;
function NotificationButton() {
  return (
    <Badge
      color="primary"
      variant="dot"
      overlap="circular"
      invisible={invisibleBadge}
    >
      <IconButton
        sx={{
          backgroundColor: "secondary.3",
          width: "46px",
          height: "46px",
          cursor: "auto",
          "&:hover": {
            backgroundColor: "secondary.2",
          },
        }}
      >
        <NotificationIcon width="16px" height="16px" />
      </IconButton>
    </Badge>
  );
}

export default NotificationButton;
