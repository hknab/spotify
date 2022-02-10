import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
function HeaderIconButton(props) {
  const { Icon, iconBackground, text } = props;
  return (
    <Box
      sx={{
        minWidth: "min-content",
        flexGrow: 1,
        height: "64px",
        borderRadius: "77px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        cursor: "pointer",
        transition: "background-color .3s ease-out",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
      }}
    >
      <Avatar
        sx={{ height: "64px", width: "64px", background: iconBackground }}
      >
        <Icon />
      </Avatar>
      <Typography ml="24px" variant="h3">
        {text}
      </Typography>
    </Box>
  );
}
HeaderIconButton.prototype = {
  icon: PropTypes.element,
  text: PropTypes.string,
  iconBackground: PropTypes.string,
};
export default HeaderIconButton;
