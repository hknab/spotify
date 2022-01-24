import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as CollaborativeIcon } from "assets/icons/collaborative.svg";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
//fake data
import ImageCover from "fake-data/user-avatar.jpg";

function Card() {
  return (
    <Box
      sx={{
        padding: "8px",
        width: "176px",
        backgroundColor: "#B3B3B31A",
        transition: "all .2s ease-in-out",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#B3B3B34D",
          "& .MuiIconButton-colorPrimary": {
            opacity: 1,
            bottom: "8px",
          },
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          width: "160px",
          height: "160px",
        }}
      >
        <img
          src={ImageCover}
          alt=""
          style={{ width: "100%", height: "100%" }}
        ></img>
        <Box></Box>
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "primary.main",
            position: "absolute",
            right: "8px",
            bottom: "-100%",
            opacity: 0,
            transition: "bottom .2s ease-in-out , opacity .3s ease-in",
            "&:hover": {
              backgroundColor: "rgba(29, 185, 84, .6)",
            },
          }}
          color="primary"
        >
          <PlayIcon width="12px" height="15px" />
        </IconButton>
      </Box>
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <Typography variant="h4">Daily Mix 1</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "38px",
            }}
          >
            <CollaborativeIcon width="18px" height="18px" />
            <EyeIcon width="18px" height="18px" />
          </Box>
        </Box>
        <Typography variant="body2" color="neutral.1">
          Doja Cat, Kim Wilde, ABBA and more
        </Typography>
      </Box>
    </Box>
  );
}

export default Card;
