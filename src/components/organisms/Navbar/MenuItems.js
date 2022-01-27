import React from "react";
import Box from "@mui/material/Box";
import MenuItemButton from "components/molecules/MenuItemButton";
import Divider from "@mui/material/Divider";
import { ReactComponent as HomeIcon } from "assets/icons/home-bold.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search-empty.svg";
import { ReactComponent as LibraryIcon } from "assets/icons/library-empty.svg";
import { ReactComponent as LikeIcon } from "assets/icons/like-empty.svg";
const menuItems = [
  [
    { text: "Home", Icon: <HomeIcon />, link: "/" },
    { text: "Search", Icon: <SearchIcon />, link: "/" },
    { text: "library", Icon: <LibraryIcon />, link: "/" },
  ],
  [{ text: "Liked Songs", Icon: <LikeIcon />, link: "/" }],
];
function MenuItems() {
  const renderGroup = (item, index) => {
    return (
      <Box
        key={index}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          "& > .MuiMenuItem-root ~ .MuiMenuItem-root": {
            marginTop: "16px !important",
          },
        }}
      >
        {item.map(renderItems)}
        <Divider
          sx={{
            borderColor: "rgba(255,255,225,0.5)",
            margin: "16px 0 !important",
          }}
        />
      </Box>
    );
  };
  const renderItems = (item, index) => {
    return <MenuItemButton icon={item.Icon} text={item.text} key={index} />;
  };
  return (
    <Box sx={{ marginTop: "40px", width: "100%" }}>
      {menuItems.map(renderGroup)}
    </Box>
  );
}

export default MenuItems;
