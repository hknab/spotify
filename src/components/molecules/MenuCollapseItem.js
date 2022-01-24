import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { ReactComponent as ExpandLess } from "assets/icons/ExpandLess.svg";
import { ReactComponent as ExpandMore } from "assets/icons/ExpandMore.svg";
function MenuCollapseItem() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <>
        <ListItemButton
          onClick={handleClick}
          sx={{ padding: " 4px 16px 4px 24px", height: "24px" }}
        >
          <ListItemText>
            <Typography variant="body1">Rock</Typography>
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, height: "24px", mt: "4px" }}>
              <ListItemText>
                <Typography variant="body2">Brit Rock</Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, height: "24px", mt: "4px" }}>
              <ListItemText>
                <Typography variant="body2">Brit Rock</Typography>
              </ListItemText>
            </ListItemButton>
          </List>
        </Collapse>
      </>
    </List>
  );
}

export default MenuCollapseItem;
