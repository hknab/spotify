import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {useControlActions} from 'context/ControlContext'
function Volume() {
  const [value, setValue] = React.useState(50);
  const { setVolume } = useControlActions();

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };
  const handleChangeCommitted = () => {
    setVolume(value);
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
  );
}

export default Volume;
