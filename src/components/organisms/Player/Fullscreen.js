import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as ExitFullscreenIcon } from "assets/icons/exit-fullscreen.svg";
import Controls from "components/molecules/player/Controls";
import TimeLine from "components/molecules/player/TimeLine";
import { usePlayerActions, usePlayerState } from "context/PlayerContext";
import React from "react";

function Fullscreen() {
  const { fullscreen, playingMusic } = usePlayerState();
  const { toggleFullscreen } = usePlayerActions();
  const ref = React.useRef();
  const music = playingMusic;
  const handleClickExitFullscreen = () => {
    document.exitFullscreen();
  };
  React.useEffect(() => {
    if (fullscreen) {
      ref.current.requestFullscreen();
    }
    const eventCallback = () => {
      if (!document.fullscreenElement) {
        toggleFullscreen();
      }
    };
    document.addEventListener("fullscreenchange", eventCallback);
    return () => {
      document.removeEventListener("fullscreenchange", eventCallback);
    };
  }, [fullscreen]);
  if (!playingMusic.id) return <Box ref={ref}></Box>;
  if (!fullscreen) return null;
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        padding: "60px 55px",
        userSelect: "none",
        "&:before": {
          content: "''",
          width: "100%",
          height: "100%",
          background: `url(${process.env.REACT_APP_API_URL}/${music.cover})`,
          filter: "blur(15px) brightness(.5)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          color: "neutral.1",
        }}
      >
        <Box
          onClick={handleClickExitFullscreen}
          sx={{
            "&:active": {
              transform: "scale(.8)",
            },
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ExitFullscreenIcon style={{ width: "30px", height: "30px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          "& > * ~ *": {
            marginTop: "20px",
          },
        }}
      >
        <Box sx={{ display: "flex", width: "auto" }}>
          <Box
            sx={{
              width: "95px",
              height: "95px",
              borderRadius: "5px",
              overflow: "hidden",
              "&>img": { height: "100%", width: "auto" },
            }}
          >
            <img src={`${process.env.REACT_APP_API_URL}/${music.cover}`} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              marginLeft: "20px",
            }}
          >
            <Typography variant="h2">{music.title}</Typography>
            <Typography variant="body3" color="neutral.1">
              {music.description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TimeLine />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Controls />
        </Box>
      </Box>
    </Box>
  );
}
export default Fullscreen;
