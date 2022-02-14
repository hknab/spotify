import React from "react";
import Box from "@mui/material/Box";
import MenuItemButton from "components/molecules/MenuItemButton";
import Divider from "@mui/material/Divider";
import { menuItems } from "navbar-items";
import MenuItemIcon from "components/molecules/MenuItemIcon";
function MenuItems({ open }) {
  const renderGroup = (item, index) => {
    return (
      <Box
        key={index}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          "& > * ~ *": {
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
    if (open) {
      return (
        <MenuItemButton
          icon={item.Icon}
          text={item.text}
          key={index}
          link={item.link}
        />
      );
    } else {
      return <MenuItemIcon icon={item.Icon} key={index} link={item.link} />;
    }
  };
  return (
    <Box sx={{ marginTop: "40px", width: "100%" }}>
      {menuItems.map(renderGroup)}
    </Box>
  );
}

export default MenuItems;
