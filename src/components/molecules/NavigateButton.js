import React from "react";
import { ReactComponent as NavigateIcon } from "assets/icons/navigate.svg";
import Box from "@mui/material/Box";
function NavigateButton({ active, direction, ...others }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        backgroundColor: active ? "secondary.1" : "secondary.3",
        color: active ? "secondary.4" : "neutral.1",
        transform: direction === "backward" ? "rotate(-180deg)" : "none",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      {...others}
    >
      <NavigateIcon />
    </Box>
  );
}

export default NavigateButton;
