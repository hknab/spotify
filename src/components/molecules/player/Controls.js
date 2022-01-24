import React from "react";
import Box from "@mui/material/Box";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PlayLeftIcon } from "assets/icons/play-left.svg";
import { ReactComponent as PlayRightIcon } from "assets/icons/play-right.svg";
import { ReactComponent as RepeatIcon } from "assets/icons/repeat.svg";
import { ReactComponent as ShuffleIcon } from "assets/icons/shuffle.svg";
function Controls() {
  return (
    <Box
      sx={{
        width: "140px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box width="16px" height="16px">
        <ShuffleIcon />
      </Box>
      <Box width="16px" height="16px">
        <PlayLeftIcon />
      </Box>
      <Box
        width="28px"
        height="28px"
        bgcolor="secondary.4"
        borderRadius="50%"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <PlayIcon
          width="9.19px"
          height="10.5px"
          fill="#191414"
          style={{ marginLeft: "10.5px", marginRight: "8.31px" }}
        />
      </Box>
      <Box width="16px" height="16px">
        <PlayRightIcon />
      </Box>
      <Box width="16px" height="16px">
        <RepeatIcon />
      </Box>
    </Box>
  );
}

export default Controls;
