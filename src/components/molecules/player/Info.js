import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as LikeIcon } from "assets/icons/like-fill.svg";
import { ReactComponent as ListIcon } from "assets/icons/list-empty.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus-empty.svg";
import { usePlayerState } from "context/PlayerContext";

function Info() {
  const { playingMusic } = usePlayerState();
  const data = playingMusic;

  if (!data) return <h5>info...</h5>;
  return (
    <Box sx={{ width: "243px", height: "48px", display: "flex" }}>
      <Box
        sx={{
          height: "100%",
          width: "48px",
          "& > img": { height: "48px", width: "auto" },
        }}
      >
        <img
          src={`https://spotify-backend-json-server.herokuapp.com/${data.cover}`}
          alt=""
        ></img>
      </Box>
      <Box
        sx={{
          marginLeft: "10px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "115px",
          "& > *": {
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          },
        }}
      >
        <Typography variant="body1">{data.title}</Typography>
        <Typography variant="body3" color="neutral.1">
          {data.subTitle || null}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginLeft: "12px",
          "& > div": {
            width: "22px",
            height: "22px",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& > div > svg": {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Box>
          <LikeIcon fill="currentColor" stroke="currentColor" />
        </Box>
        <Box>
          <ListIcon />
        </Box>
        <Box>
          <PlusIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Info;
