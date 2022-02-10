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
  const { shuffle, repeat, play } = usePlayerState();
  const { setShuffle, setRepeat, getNext, getPrevious, togglePlay } =
    usePlayerActions();
  const [isNavigateActive, setIsNavigateActive] = React.useState(true);
  //TODO: set shuffle and set Repeat functionality
  const handleClickShuffle = () => setShuffle();
  const handleClickPlay = () => togglePlay();
  const handleClickRepeat = () => setRepeat();

  const handleNavigateActive = () => {
    setIsNavigateActive(false);
    setTimeout(() => {
      setIsNavigateActive(true);
    }, 999);
  };
  const handleClickNext = () => {
    if (isNavigateActive) {
      getNext();
      handleNavigateActive();
    }
  };
  const handleClickPrevious = () => {
    if (isNavigateActive) {
      getPrevious();
      handleNavigateActive();
    }
  };
  return (
    <Box
      sx={{
        width: "140px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > *": {
          "&:active": {
            transform: "scale(.95)",
          },
        },
      }}
    >
      <Box width="16px" height="16px" onClick={handleClickShuffle}>
        <ShuffleIcon fill={shuffle ? "#1DB954" : "#B3B3B3"} />
      </Box>
      <Box width="16px" height="16px" onClick={handleClickPrevious}>
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
          <RowsIcon
            width="13px"
            height="13px"
            fill="#191414"
            style={{ transform: "rotate(90deg)" }}
          />
        ) : (
          <PlayIcon
            width="9.19px"
            height="10.5px"
            fill="#191414"
            style={{ marginLeft: "10.5px", marginRight: "8.31px" }}
          />
        )}
      </Box>
      <Box width="16px" height="16px" onClick={handleClickNext}>
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
