import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as CollaborativeIcon } from "assets/icons/collaborative.svg";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as RowsIcon } from "assets/icons/rows.svg";

import { usePlaylist } from "hooks/playlist";
import CardSkeleton from "skeletons/CardSkeleton";
import { usePlayerActions, usePlayerState } from "context/PlayerContext";
function Card({ id }) {
  const { data, isLoading } = usePlaylist(id);
  const { setPlaylistOrMusic, togglePlay } = usePlayerActions();
  const { play, playlistId } = usePlayerState();
  const handleClickActiveButton = () => {
    setPlaylistOrMusic(data.items, data.id);
  };
  const handleClickToggle = () => {
    togglePlay(true);
  };

  const MemoizedCard = React.useMemo(() => {
    if (isLoading) return null;
    return (
      <Box
        sx={{
          padding: "8px",
          width: "176px",
          backgroundColor: "#B3B3B31A",
          transition: "all .2s ease-in-out",
          borderRadius: "8px",
          maxHeight: "246px",
          "& .MuiIconButton-colorPrimary": {
            opacity: data.id === playlistId ? 1 : 0,
            bottom: data.id === playlistId ? "8px" : "-100%",
          },
          "&:hover": {
            backgroundColor: "#B3B3B34D",
            "& .MuiIconButton-colorPrimary": {
              opacity: 1,
              bottom: "8px",
            },
          },
        }}
      >
        {console.log(`card id ${data.id} rendered`)}
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
            src={`http://localhost:4000${data.cover}`}
            alt=""
            style={{ width: "100%", height: "100%" }}
          ></img>
          {data.id === playlistId ? (
            play ? (
              <IconButton
                onClick={handleClickToggle}
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
                <RowsIcon
                  width="13px"
                  height="13px"
                  fill="white"
                  style={{ transform: "rotate(90deg)" }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleClickToggle}
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
            )
          ) : (
            <IconButton
              onClick={handleClickActiveButton}
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
          )}
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
            <Typography variant="h4">{data.title}</Typography>
            {/*
          ==========this component are rendered as needed==========
          { <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "38px",
          }}
        >
              <CollaborativeIcon width="18px" height="18px" />
            <EyeIcon width="18px" height="18px" />
        </Box>} */}
          </Box>
          {data.description && (
            <Typography variant="body2" color="neutral.1">
              {data.description}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }, [play, playlistId, isLoading]);
  if (isLoading) return <CardSkeleton />;

  return MemoizedCard;
}

export default Card;
