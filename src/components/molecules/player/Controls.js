import React from "react";
import Box from "@mui/material/Box";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PlayLeftIcon } from "assets/icons/play-left.svg";
import { ReactComponent as PlayRightIcon } from "assets/icons/play-right.svg";
import { ReactComponent as RepeatIcon } from "assets/icons/repeat.svg";
import { ReactComponent as ShuffleIcon } from "assets/icons/shuffle.svg";
import { ReactComponent as RowsIcon } from "assets/icons/rows.svg";
import { usePlayerActions, usePlayerState } from "context/PlayerContext";

function Controls() {
  const { shuffle, play, repeat } = usePlayerState();
  const { setShuffle, setPlay, setRepeat } = usePlayerActions();
  const handleClickShuffle = () => setShuffle();
  const handleClickPlay = () => setPlay();
  const handleClickRepeat = () => setRepeat();
  return (
    <Box
      sx={{
        width: "140px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > *": {
          cursor: "pointer",
          "&:active": {
            transform: "scale(.95)",
          },
        },
      }}
    >
      <Box width="16px" height="16px" onClick={handleClickShuffle}>
        <ShuffleIcon fill={shuffle ? "#1DB954" : "#B3B3B3"} />
      </Box>
      <Box width="16px" height="16px">
        <PlayLeftIcon />
      </Box>
      <Box
        width="28px"
        height="28px"
        bgcolor="secondary.4"
        borderRadius="50%"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        fill="inherit"
        onClick={handleClickPlay}
      >
        {play ? (
          <PlayIcon
            width="9.19px"
            height="10.5px"
            fill="#191414"
            style={{ marginLeft: "10.5px", marginRight: "8.31px" }}
          />
        ) : (
          <RowsIcon width="13px" height="13px" fill="#191414" style={{}} />
        )}
      </Box>
      <Box width="16px" height="16px">
        <PlayRightIcon />
      </Box>
      <Box
        width="16px"
        height="16px"
        fill="inherit"
        onClick={handleClickRepeat}
      >
        <RepeatIcon fill={repeat ? "#1DB954" : "#B3B3B3"} />
      </Box>
    </Box>
  );
}

export default Controls;
