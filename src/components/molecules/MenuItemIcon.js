import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
function MenuItemIcon({ icon, text, link }) {
  return (
    <Link to={link}>
      <MenuItem
        sx={{
          borderRadius: "40px",
          height: "40px",
          width: "100%",
          maxWidth: "63px",
          /* backgroundColor: "rgba(255, 255, 255, 0.15);",*/
        }}
      >
        <ListItemIcon sx={{}}>{icon}</ListItemIcon>
      </MenuItem>
    </Link>
  );
}
MenuItemIcon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

export default MenuItemIcon;
