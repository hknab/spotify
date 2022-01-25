import React from "react";
import Box from "@mui/material/Box";
import Info from "./player/Info";
// // test
// import { ReactComponent as LikeFillIcon } from "assets/icons/like-fill.svg";
// import { ReactComponent as MusicFillIcon } from "assets/icons/music-fill.svg";
// import { ReactComponent as FriendsFillIcon } from "assets/icons/friends-fill.svg";

// import gradient from "util/gradient";

function Molecules() {
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
      <Info />
    </Box>
  );
}

export default Molecules;
