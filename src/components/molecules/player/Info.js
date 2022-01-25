import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as LikeIcon } from "assets/icons/like-fill.svg";
import { ReactComponent as ListIcon } from "assets/icons/list-empty.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus-empty.svg";

//fake data
import cover from "fake-data/cover.jpg";
const data = {
  cover,
  title: "No One Knows",
  subTitle: "Queens of the Stone Age",
};
function Info() {
  return (
    <Box sx={{ width: "243px", height: "48px", display: "flex" }}>
      <Box
        sx={{ height: "100%", "& > img": { height: "100%", width: "auto" } }}
      >
        <img src={cover} alt=""></img>
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
        <Typography variant="body2">{data.title}</Typography>
        <Typography variant="body3" color="neutral.1">
          {data.subTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginLeft: "12px",
          "& > div": {
            width: "16px",
            height: "16px",
            color: "primary.main",
            cursor: "pointer",
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
