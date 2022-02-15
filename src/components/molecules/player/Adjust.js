import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ReactComponent as IdentificationIcon } from "assets/icons/identification-card.svg";
import { ReactComponent as LyricsIcon } from "assets/icons/lyrics.svg";
import { ReactComponent as DiscIcon } from "assets/icons/disc.svg";
import { ReactComponent as SpeakerIcon } from "assets/icons/speaker.svg";
import { ReactComponent as FullScreenIcon } from "assets/icons/full-screen.svg";
import { ReactComponent as SpeakerMuteIcon } from "assets/icons/speaker-mute.svg";
import { useControlActions } from "context/ControlContext";
import { usePlayerActions } from "context/PlayerContext";

let volumeValue = 25;
function Adjust() {
  const [mute, setMute] = React.useState(false);
  const [value, setValue] = React.useState(50);
  const { setVolume } = useControlActions();
  const { toggleFullscreen } = usePlayerActions();
  const handleChangeSpeaker = () => {
    if (mute) {
      setValue(volumeValue);
      setVolume(volumeValue);
      setMute(false);
    } else {
      volumeValue = value;
      setVolume(0);
      setValue(0);
      setMute(true);
    }
  };
  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };
  const handleChangeCommitted = () => {
    setVolume(value);
    value === 0 ? setMute(true) : setMute(false);
  };
  const handleClickFullscreen = () => {
    toggleFullscreen();
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="235px"
      sx={{
        "& svg:hover": {
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "50px",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "8px",
          "& > * ~ *": { marginLeft: "8px" },
          "& .MuiGrid-item": { width: "20px", height: "20px" },
          "& svg": {
            width: "100%",
            height: "100%",
            color: "#B3B3B3",
          },
        }}
      >
        <Box>
          <IdentificationIcon />
        </Box>
        <Box>
          <LyricsIcon />
        </Box>
      </Box>
      <Box
        sx={{
          width: "158px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "neutral.1",
          "& svg": {
            width: "18px",
            height: "18px",
          },
        }}
      >
        <Box>
          <DiscIcon />
        </Box>
        <Box>
          <Box onClick={handleChangeSpeaker}>
            {mute ? <SpeakerMuteIcon /> : <SpeakerIcon />}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "72px",
          }}
        >
          <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            onChangeCommitted={handleChangeCommitted}
            size="small"
            sx={{
              height: "4px",
              "& .MuiSlider-thumb": {
                display: "none",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "neutral.2",
              },
              "& .MuiSlider-track ": { backgroundColor: "neutral.1" },
            }}
          />
        </Box>
        <Box onClick={handleClickFullscreen}>
          <FullScreenIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Adjust;
