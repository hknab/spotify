import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as LikeEmptyIcon } from "assets/icons/like-empty.svg";
import { ReactComponent as LikeFillIcon } from "assets/icons/like-fill.svg";
//fake-data
import SongArtistCover from "fake-data/song-artist.jpg";
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "680px",
        height: "48px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color .3s ease-out",
        userSelect: "none",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "19px",
          height: "100% ",
          justifyContent: "space-between",
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
          style={{ height: "100%", borderRadius: "2px" }}
        ></img>
        <Typography variant="body1">Friday I’m In Love</Typography>
      </Box>
      <Box
        sx={{
          marginRight: "30px",
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
