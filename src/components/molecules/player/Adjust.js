import React from "react";
import Box from "@mui/material/Box";
import Volume from "./Volume";
import { ReactComponent as IdentificationIcon } from "assets/icons/identification-card.svg";
import { ReactComponent as LyricsIcon } from "assets/icons/lyrics.svg";
import { ReactComponent as DiscIcon } from "assets/icons/disc.svg";
import { ReactComponent as SpeakerIcon } from "assets/icons/speaker.svg";
import { ReactComponent as FullScreenIcon } from "assets/icons/full-screen.svg";

function Adjust() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="210px"
    >
      <Box
        sx={{
          display: "flex",
          width: "40px",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "8px",
          "& > * ~ *": { marginLeft: "8px" },
          "& .MuiGrid-item": { width: "16px", height: "16px" },
          "& svg": {
            width: "100%",
            height: "100%",
            stroke: "#B3B3B3",
          },
        }}
      >
        <Box>
          <IdentificationIcon />
        </Box>
        <Box>
          <LyricsIcon />
        </Box>
      </Box>
      <Box
        sx={{
          width: "138px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "neutral.1",
          "& svg": {
            width: "12px",
            height: "12px",
          },
        }}
      >
        <Box>
          <DiscIcon />
        </Box>
        <Box>
          <SpeakerIcon />
        </Box>
        <Volume />
        <Box>
          <FullScreenIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Adjust;
