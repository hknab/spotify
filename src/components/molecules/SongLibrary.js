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
//fake-data
import SongArtistCover from "fake-data/song-artist.jpg";
import userAvatar from "fake-data/user-avatar.jpg";
function SongArtist() {
  const [like, setLike] = React.useState(false);
  const [hover, setHover] = React.useState();
  const handleLike = () => {
    setLike((prev) => !prev);
  };
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      sx={{
        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: `
             minmax(max-content , 285px) 
             minmax(max-content , 190px)
             minmax(max-content , 65px)
            minmax(max-content , 100px)
            minmax(max-content , 160px)
            minmax(max-content , 80px)`,
        columnGap: "24px",
        alignItems: "center",
        maxWidth: "1004px",

        height: "48px",
        borderRadius: "8px",
        cursor: "pointer",
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
          {hover ? (
            <IconButton
              color="secondary"
              sx={{
                backgroundColor: "primary.main",
                width: "100%",
                height: "100%",
                padding: "0",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              <PlayIcon width="5.25" height="6" />
            </IconButton>
          ) : (
            <Typography variant="body1" color="neutral.1">
              15
            </Typography>
          )}
        </Box>

        <img
          src={SongArtistCover}
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
          <Typography variant="h4">Friday I’m In Love</Typography>
          <Typography variant="body2" color="neutral.1">
            Starsailor
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body2" color="neutral.1">
          Brain Drain
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body2" color="neutral.1">
          2 day ago
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ width: "16px", height: "16px" }}>
          <LikeIcon width="inherit" height="inherit" stroke="#B3B3B3" s />
        </Box>
        <Box sx={{ width: "16px", height: "16px" }}>
          <UnlikeIcon width="inherit" height="inherit" stroke="#B3B3B3" s />
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
          Jane Flores
        </Typography>
      </Box>
      <Box
        sx={{
          width: "81px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={handleLike}
          sx={{
            width: "16px",
            height: "16px",
            "&:active": { transform: "scale(1.1)" },
          }}
        >
          {like ? (
            <LikeFillIcon width="100%" height="100%" fill="#1db954" />
          ) : (
            <LikeEmptyIcon width="100%" height="100%" />
          )}
        </Box>
        <Typography variant="body1" color="neutral.1">
          03:17
        </Typography>
      </Box>
    </Box>
  );
}

export default SongArtist;
