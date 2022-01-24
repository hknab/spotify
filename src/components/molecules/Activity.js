import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ReactComponent as DotIcon } from "assets/icons/dot.svg";
import { ReactComponent as UserCircle } from "assets/icons/userCircle.svg";
import { ReactComponent as DiscIcon } from "assets/icons/disc.svg";
import { ReactComponent as MusicIcon } from "assets/icons/music-empty.svg";

//fake data
import ActivityAvatar from "fake-data/activity-avatar.jpg";
const data = {
  avatar: ActivityAvatar,
  title: "Jane Flores",
  time: "1 hr",
  track: ["Love Illumination", "Franz Ferninard"],
  description: {
    type: "song", // user , song , disc
    text: "The Right Thoughts,Right Wo...",
  },
};
function Activity() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "221px",
        height: "56px",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "10px 8px",
        cursor: "pointer",
        "&:hover": { backgroundColor: "secondary.3" },
        // backgroundColor: "neutral.3",
      }}
    >
      <Avatar
        src={data.avatar}
        sx={{
          width: "36px",
          height: "36px",
          border: "1px solid",
          borderColor: "other.yellow",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-evenly",
        }}
      >
        <Box item sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" color="neutral.1">
            {data.title}
          </Typography>
          {/*TODO: add music spectrum */}
          <Typography variant="body3" color="neutral.1">
            1 hr
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body3">{data.track[0]}</Typography>
          <DotIcon />
          <Typography variant="body3">{data.track[1]}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > *:first-child": { marginRight: "5px" },
          }}
        >
          {data.description.type === "user" && (
            <UserCircle width="7.5px" height="7.5px" />
          )}
          {data.description.type === "disc" && (
            <DiscIcon width="7.5px" height="7.5px" />
          )}
          {data.description.type === "song" && (
            <MusicIcon width="7.5px" height="7.5px" />
          )}
          <Typography variant="body3" color="neutral.1">
            {data.description.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Activity;
