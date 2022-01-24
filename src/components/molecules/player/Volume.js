import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function Volume() {
  const [volume, setVolume] = React.useState(0);
  const handleChangeVolume = (e) => {
    setVolume(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "72px",
      }}
    >
      <Slider
        aria-label="Volume"
        value={volume}
        onChange={handleChangeVolume}
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
  );
}

export default Volume;
