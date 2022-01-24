import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import gradient from "util/gradient";
function TimeLine() {
  const [time, setTime] = React.useState(0);
  const [sliderValue, setSliderValue] = React.useState(time);
  const handleChangeTime = (e) => {
    setSliderValue(e.target.value);
  };
  const handleChangeCommitted = () => {
    setTime(sliderValue);
  };
  React.useEffect(() => {
    console.log(time);
  }, [time]);
  return (
    <Box
      sx={{
        maxWidth: "560px",
        minWidth: "100px",
        height: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body3" color="neutral.1" mr="8px">
        01:42
      </Typography>
      <Slider
        aria-label="Time"
        value={sliderValue}
        onChange={handleChangeTime}
        onChangeCommitted={handleChangeCommitted}
        size="small"
        sx={{
          height: "4px",
          width: "504px",
          minWidth: "100px",
          "& .MuiSlider-thumb": {
            display: "none",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "neutral.2",
          },
          "& .MuiSlider-track ": {
            backgroundColor: gradient.green1,
          },
        }}
      />
      <Typography variant="body3" color="neutral.1" ml="8px">
        4:08
      </Typography>
    </Box>
  );
}

export default TimeLine;
