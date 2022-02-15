import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as LikeEmptyIcon } from "assets/icons/like-empty.svg";
import { ReactComponent as LikeFillIcon } from "assets/icons/like-fill.svg";
import { ReactComponent as LikeIcon } from "assets/icons/like.svg";
import { ReactComponent as UnlikeIcon } from "assets/icons/unlike.svg";
import { ReactComponent as RowsIcon } from "assets/icons/rows.svg";
import { usePlayerActions } from "context/PlayerContext";
import { useParams } from "react-router-dom";
import { usePlaylist } from "hooks/playlist";
import PlayingAnimation from "components/atoms/PlayingAnimation";
function SongArtist({ item, index, playingMusic, play, playlist }) {
  const { id } = useParams();
  const { data } = usePlaylist(id);
  const [like, setLike] = React.useState(false);
  const [hover, setHover] = React.useState();
  const { togglePlay, setPlayerMusic } = usePlayerActions();
  const handleLike = () => {
    setLike((prev) => !prev);
  };
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleTogglePlay = () => {
    togglePlay();
  };
  const handleClickSetMusic = () => {
    setPlayerMusic(data, item.id);
  };
  const playPauseButton = () => {
    if (playingMusic.id === item.id) {
      if (play) {
        if (hover)
          return (
            <IconButton onClick={handleTogglePlay} color="primary">
              <RowsIcon
                width="13px"
                height="13px"
                fill="white"
                style={{ transform: "rotate(90deg)" }}
              />
            </IconButton>
          );
        else return <PlayingAnimation />;
      } else {
        return (
          <IconButton onClick={handleTogglePlay} color="primary">
            <PlayIcon width="12px" height="15px" color="white" />
          </IconButton>
        );
      }
    } else {
      if (hover)
        return (
          <IconButton onClick={handleClickSetMusic} color="primary">
            <PlayIcon width="12px" height="15px" color="white" />
          </IconButton>
        );
      else
        return (
          <Typography variant="body1" color="neutral.1">
            {index + 1}
          </Typography>
        );
    }
  };

  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      sx={{
        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: `
            minmax(max-content , 6fr)
            minmax(max-content , 4fr)
            minmax(max-content , 3fr)
            minmax(max-content , 1fr)`,
        columnGap: "24px",
        alignItems: "center",
        width: "100%",
        gridTemplateColumns: `
         6fr  4fr  3fr  minmax(120px,1fr)`,
        height: "48px",
        borderRadius: "8px",
        transition: "background-color .3s ease-out",
        userSelect: "none",
        padding: "0 8px",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          "& > * ~ *": {
            marginLeft: "8px !important",
          },
        }}
      >
        <Box
          sx={{
            width: "16px",
            height: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {playPauseButton()}
        </Box>

        <img
          src={`http://localhost:4000${item.cover}`}
          alt=""
          style={{ height: "48px", borderRadius: "2px" }}
        ></img>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "5px 0",
          }}
        >
          <Typography variant="h4">{item.title}</Typography>
          <Typography variant="body2" color="neutral.1">
            {item.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="neutral.1">
          {item.album}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="neutral.1">
          {item.date}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {hover && (
          <Box
            onClick={handleLike}
            sx={{
              width: "16px",
              height: "16px",
              "&:active": { transform: "scale(1.1)" },
              marginRight: "20px",
            }}
          >
            {like ? (
              <LikeFillIcon width="100%" height="100%" fill="#1db954" />
            ) : (
              <LikeEmptyIcon width="100%" height="100%" />
            )}
          </Box>
        )}
        <Typography variant="body1" color="neutral.1">
          {item.length}
        </Typography>
      </Box>
    </Box>
  );
}

export default SongArtist;
/*
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ width: "16px", height: "16px" }}>
          <LikeIcon width="100%" height="100%" stroke="#B3B3B3" />
        </Box>
        <Box sx={{ width: "16px", height: "16px" }}>
          <UnlikeIcon width="100%" height="100%" stroke="#B3B3B3" />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          src={userAvatar}
          sx={{
            width: "24px",
            height: "24px",
            border: "1px solid",
            borderColor: "other.yellow",
          }}
        ></Avatar>
        <Typography variant="body2" color="neutral.1" ml="10px">
          {item.artist}
        </Typography>
      </Box>
*/
