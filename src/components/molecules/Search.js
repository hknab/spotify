import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { ReactComponent as SearchIcon } from "assets/icons/search-empty.svg";
function Search({ value, handleChange, sx }) {
  return (
    <Box
      sx={{
        width: "256px",
        height: "32px",
        borderRadius: "26px",
        backgroundColor: "secondary.4",
        color: "neutral.3",
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "16px",
          height: "16px",
          marginLeft: "16px",
          "& > svg": {
            width: "100%",
            height: "100%",
            stroke: "currentColor",
          },
        }}
      >
        <SearchIcon />
      </Box>

      <InputBase
        sx={{
          width: "200px",
          marginLeft: "16px",
          color: "currentColor",
          height: "100%",
          fontSize: "10px",
          lineHeight: "12px",
          fontWeight: "normal",
        }}
        placeholder="Artists, songs, or podcasts"
        value={value}
        onChange={handleChange}
        variant="body3"
      ></InputBase>
    </Box>
  );
}

export default Search;
