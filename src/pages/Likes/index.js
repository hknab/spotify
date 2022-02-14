import React from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "hooks/playlist";
import Box from "@mui/material/Box";
import PlaylistLayout from "pages/PlaylistLayout";
import gradient from "util/gradient";
import { Typography } from "@mui/material";
import { ReactComponent as LikeIcon } from "assets/icons/like-fill.svg";
function Collection({ collection }) {
  const { id } = useParams();
  const { data, isLoading } = usePlaylist(id);
  return (
    <PlaylistLayout>
      <Box
        component="header"
        sx={{
          width: "100%",
          height: "306px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: gradient.blue1,
            opacity: 0.2,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            padding: "98px 64px 0 64px",
          }}
        >
          <Box
            sx={{
              height: "158px",
              width: "158px",
              borderRadius: "8px",
              background: gradient.blue1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LikeIcon width="80px" height="80px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "7px 0",
              marginLeft: "32px",
            }}
          >
            <Typography variant="h6">playlıst</Typography>
            <Typography variant="h1">Friends Played</Typography>
            <Typography variant="body3" color="neutral.1">
              Made For{" "}
              <Typography variant="h5" sx={{ display: "inline-block" }}>
                Orhan
              </Typography>{" "}
              50 songs, 3 hr 15 min
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "0 64px", marginTop: "22px" }}>
        <Box></Box>
        <Box></Box>
      </Box>
    </PlaylistLayout>
  );
}

export default Collection;
