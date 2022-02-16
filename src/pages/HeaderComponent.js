import React from "react";
import { ReactComponent as LikeIcon } from "assets/icons/like-fill.svg";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as LikeEmptyIcon } from "assets/icons/like-empty.svg";
import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";
import { ReactComponent as DotsIcon } from "assets/icons/dots.svg";
import { usePlayerActions, usePlayerState } from "context/PlayerContext";
import { ReactComponent as RowsIcon } from "assets/icons/rows.svg";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { usePlaylist } from "hooks/playlist";
import Typography from "@mui/material/Typography";
function HeaderComponent({ isWorking = false }) {
  const { togglePlay, setPlayerPlaylist } = usePlayerActions();
  const { play, playlist } = usePlayerState();
  const { id } = useParams();
  const { data, isLoading } = usePlaylist(id);

  const handleClickPlayAndPause = () => {
    togglePlay();
  };
  const handleClickSetPlaylist = () => {
    setPlayerPlaylist(data);
  };
  const playAndPauseButton = () => {
    if (playlist.id === data.id) {
      return (
        <IconButton
          onClick={handleClickPlayAndPause}
          sx={{
            width: "44px",
            height: "44px",
            padding: 0,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "rgba(29, 185, 84, .6)",
            },
            cursor: "unset",
            "& > svg": {},
          }}
          color="primary"
        >
          {play ? (
            <RowsIcon
              width="23px"
              height="23px"
              fill="white"
              style={{ transform: "rotate(90deg)" }}
              stroke="none"
            />
          ) : (
            <PlayIcon
              width="20px"
              height="20px"
              color="white"
              style={{ marginLeft: "14px", marginRight: "10px" }}
            />
          )}
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={handleClickSetPlaylist}
          sx={{
            width: "44px",
            height: "44px",
            padding: 0,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "rgba(29, 185, 84, .6)",
            },
            cursor: "unset",
            "& > svg": {},
          }}
          color="primary"
        >
          <PlayIcon
            width="20px"
            height="20px"
            color="white"
            style={{ marginLeft: "14px", marginRight: "10px" }}
          />
        </IconButton>
      );
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {playAndPauseButton()}
      <Typography variant="h2" sx={{ padding: "0 16px" }}>
        {data.title}
      </Typography>
    </Box>
  );
}

export default HeaderComponent;
