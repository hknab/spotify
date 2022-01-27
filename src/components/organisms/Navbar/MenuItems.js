import React from "react";
import Box from "@mui/material/Box";
import MenuItemButton from "components/molecules/MenuItemButton";
import Divider from "@mui/material/Divider";
import { menuItems } from "navbar-items";

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
