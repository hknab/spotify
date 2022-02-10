import React from "react";
import Box from "@mui/material/Box";
import HeaderIconButton from "components/molecules/HeaderIconButton";
import { ReactComponent as LikeFillIcon } from "assets/icons/like-fill.svg";
import { ReactComponent as MusicFillIcon } from "assets/icons/music-fill.svg";
import { ReactComponent as FriendsFillIcon } from "assets/icons/friends-fill.svg";
import gradient from "util/gradient";
function HomePageTopButtons() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        "&> * ~ *": {
          marginLeft: "54px",
        },
      }}
    >
      <HeaderIconButton
        Icon={LikeFillIcon}
        iconBackground={gradient.blue3}
        text="Liked Songs"
      />
      <HeaderIconButton
        Icon={MusicFillIcon}
        iconBackground={gradient.blue2}
        text="Recently Played"
      />
      <HeaderIconButton
        Icon={FriendsFillIcon}
        iconBackground={gradient.blue1}
        text="Friends Played"
      />
    </Box>
  );
}

export default HomePageTopButtons;
