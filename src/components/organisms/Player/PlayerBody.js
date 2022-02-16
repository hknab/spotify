import React from "react";
import Box from "@mui/material/Box";
import Info from "components/molecules/player/Info";
import Controls from "components/molecules/player/Controls";
import TimeLine from "components/molecules/player/TimeLine";
import Adjust from "components/molecules/player/Adjust";
import Audio from "./Audio";
import Fullscreen from "./Fullscreen";
import PlayerSkeleton from "skeletons/PlayerSkeleton";
import { usePlayerActions, usePlayerState } from "context/PlayerContext";
import { useMusics, useMusicQueries } from "hooks/music";
import { usePlaylist } from "hooks/playlist";
import { useUpdateUser, useUser } from "hooks/user";
import { useControlState, useControlSetState } from "context/ControlContext";

function PlayerBody() {
  const { data, isLoading } = usePlaylist(1);
  const { setPlayerPlaylist } = usePlayerActions();
  const { playlist, playingMusic } = usePlayerState();

  React.useEffect(() => {
    if (!isLoading) {
      setPlayerPlaylist(data, false);
    }
  }, [data]);

  if (!playingMusic.id) return <PlayerSkeleton />;
  return (
    <>
      <Audio />
      <Fullscreen />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "0 16px",
        }}
      >
        <Box sx={{ width: "243px" }}>
          <Info />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            minWidth: "min-content",
            width: "560px",
            "& > *:nth-child(1)": {
              marginBottom: "10px",
            },
          }}
        >
          <Controls />
          <TimeLine />
        </Box>
        <Box>
          <Adjust />
        </Box>
      </Box>
    </>
  );
}
export default PlayerBody;
