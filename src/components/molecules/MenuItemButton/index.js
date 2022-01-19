import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function MenuItemButton() {
  return (
    <MenuItem>
      <ListItemIcon></ListItemIcon>
      <ListItemText>Paste</ListItemText>
      <Typography variant="body2" color="text.secondary">
        ⌘V
      </Typography>
    </MenuItem>
  );
}

export default MenuItemButton;
