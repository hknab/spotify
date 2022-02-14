import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function MenuItemButton({ icon, text, link }) {
  return (
    <Link to={link}>
      <MenuItem
        sx={{
          borderRadius: "40px",
          height: "40px",
          width: "100%",
          maxWidth: "193px",
          /* backgroundColor: "rgba(255, 255, 255, 0.15);",*/
        }}
      >
        <ListItemIcon sx={{ marginRight: "4px" }}>{icon}</ListItemIcon>
        <ListItemText>
          <Typography variant="h4">{text}</Typography>
        </ListItemText>
      </MenuItem>
    </Link>
  );
}
MenuItemButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

export default MenuItemButton;
