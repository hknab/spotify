import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
function MenuItemIcon({ icon, text }) {
    return (
        <MenuItem
            sx={{
                borderRadius: "40px",
                height: "40px",
                width: "100%",
                maxWidth: "63px",
                /* backgroundColor: "rgba(255, 255, 255, 0.15);",*/
            }}
        >
            <ListItemIcon sx={{ }}>{icon}</ListItemIcon>
        </MenuItem>
    );
}
MenuItemIcon.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
};

export default MenuItemIcon;