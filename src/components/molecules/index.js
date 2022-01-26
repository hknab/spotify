import React from "react";
import Box from "@mui/material/Box";
import Volume from "./player/Volume";
import { usePlayerState } from "context/PlayerContext";

// // test
// import { ReactComponent as LikeFillIcon } from "assets/icons/like-fill.svg";
// import { ReactComponent as MusicFillIcon } from "assets/icons/music-fill.svg";
// import { ReactComponent as FriendsFillIcon } from "assets/icons/friends-fill.svg";

// import gradient from "util/gradient";

function Molecules() {
  const context = usePlayerState();
  console.log(context);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100%",
        flexDirection: "row",
        backgroundColor: "secondary.2",
        "& > * ~ *": {
          marginTop: "10px",
          marginLeft: "10px",
        },
      }}
    >
      <Volume />
    </Box>
  );
}

export default Molecules;
