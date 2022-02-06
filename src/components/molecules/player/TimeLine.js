import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import gradient from "util/gradient";
import convertSecond from 'util/convertSecond'
import {  usePlayerState } from "context/PlayerContext";
import {useControlState , useControlActions} from "context/ControlContext";

function TimeLine() {
    const {time , duration } = useControlState()
    const {   setPosition} = useControlActions();
    const {fullscreen} = usePlayerState()
    const [mouseDown , setMouseDown] = React.useState(false)
  const [sliderValue, setSliderValue] = React.useState(0);

    const handleChangeTime = (e) => {
        setSliderValue(e.target.value);
    };
    const handleChangeCommitted = () => {
        setPosition(sliderValue);
    };
    const handleMouseDown = ()=>{
        setMouseDown(true)
        setPosition('selecting')
    }
    const handleMouseOut = ()=>{
        setMouseDown(false)
    }
    const handleMouseLeave =()=>{
        setMouseDown(false)
    }
    React.useEffect(()=>{
        if(!mouseDown){
        setSliderValue(time)
        }
    },[time])


  return (
    <Box
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseOut}
        onMouseLeave={handleMouseLeave}
      sx={{
        maxWidth:"100%",
        minWidth: "100px",
          width:"inherit",
        height: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
          userSelect:"none",
          flexWrap: fullscreen? 'wrap' : 'nowrap',

      }}
    >
        {!fullscreen &&<Typography variant="body3" color="neutral.1" mr="8px" sx={{fontVariantNumeric: "tabular-nums"}}>
            {convertSecond(sliderValue)}
        </Typography>}
      <Slider

        aria-label="Time"
        value={sliderValue}
        onChange={handleChangeTime}
        onChangeCommitted={handleChangeCommitted}
        min={0}
        max={duration}
        size="small"
        sx={{
          height: "4px",
          width: "100%",
          minWidth: "100px",

          "& .MuiSlider-thumb": {
            display: "none",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "neutral.2",
          },
            "& .MuiSlider-track ":{
                background: gradient.green1,
            },
            "&:hover":{
                "& .MuiSlider-thumb": {
                    display: "block",
                },

            },
        }}
      />
        {fullscreen &&<Typography variant="body3" color="neutral.1" mr="8px" sx={{fontVariantNumeric: "tabular-nums"}}>
            {convertSecond(sliderValue)}
        </Typography>}
      <Typography variant="body3" color="neutral.1" ml="8px">
          {convertSecond(duration)}
      </Typography>

    </Box>
  );
}

export default TimeLine;
