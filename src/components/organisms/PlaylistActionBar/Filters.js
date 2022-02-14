import React from "react";
import Search from "components/molecules/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { usePlaylistActions } from "context/PlaylistContext";
function Filters() {
  const options = ["Custom order", "By name", "By play count"];
  const [searchValue, setSearchValue] = React.useState("");
  const [orderValue, setOrderValue] = React.useState(0);
  const { setSearchQuery } = usePlaylistActions();
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  React.useEffect(() => {
    setSearchQuery("");
  }, []);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(searchValue);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);
  const handleChangeOrder = (e) => {
    setOrderValue(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > 8 ~*": { marginLeft: "8px" },
      }}
    >
      <Search
        value={searchValue}
        handleChange={handleChangeSearch}
        sx={{ backgroundColor: "rgba(255,255,255,.4)", color: "white" }}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={orderValue}
          onChange={handleChangeOrder}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            height: "32px",
            borderRadius: "32px",
            width: "110px",
            backgroundColor: "neutral.3",

            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "10px",
            lineHeight: "12px",
          }}
        >
          {options.map((value, index) => {
            return (
              <MenuItem key={value} value={index}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filters;
