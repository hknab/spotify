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
        width: "180px",
        height: "36px",
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
      <Box onClick={handleClickShuffle}>
        <ShuffleIcon
          width="20px"
          height="20px"
          color={shuffle ? "#1DB954" : "#B3B3B3"}
        />
      </Box>
      <Box onClick={handleClickPrevious}>
        <PlayRightIcon
          width="18px"
          height="18px"
          style={{ transform: "rotate(180deg)" }}
        />
      </Box>
      <Box
        width="35px"
        height="35px"
        bgcolor="secondary.4"
        borderRadius="50%"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        color="inherit"
        onClick={handleClickPlay}
      >
        {play ? (
          <RowsIcon
            width="18px"
            height="18px"
            color="#191414"
            style={{ transform: "rotate(90deg)" }}
          />
        ) : (
          <PlayIcon
            width="15px"
            height="16.5px"
            color="#191414"
            style={{ marginLeft: "10.5px", marginRight: "8.31px" }}
          />
        )}
      </Box>
      <Box onClick={handleClickNext}>
        <PlayRightIcon width="18px" height="18px" />
      </Box>
      <Box fill="inherit" onClick={handleClickRepeat}>
        <RepeatIcon
          width="20px"
          height="20px"
          color={repeat ? "#1DB954" : "#B3B3B3"}
        />
      </Box>
    </Box>
  );
}

export default Controls;
