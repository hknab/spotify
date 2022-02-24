import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useFolders } from "hooks/folder";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ReactComponent as ExpandLess } from "assets/icons/ExpandLess.svg";
import { ReactComponent as ExpandMore } from "assets/icons/ExpandMore.svg";
import PlaylistSkeleton from "skeletons/PlaylistSkeleton";
import { Link } from "react-router-dom";
function MenuCollapseItem() {
  const [open, setOpen] = React.useState(null);
  const { data, isLoading } = useFolders();

  const handleClick = (index, prevent) => {
    if (prevent) return null;
    if (index === open) {
      setOpen(null);
      return;
    }
    setOpen(index);
  };

  const renderItem = (item, index, collapse) => {
    const prevent = !!item.children.length < 1;
    return (
      <ListItemButton
        onClick={() => handleClick(index, prevent)}
        sx={{
          padding: " 4px 16px 4px 24px",
          height: "24px",
          whiteSpace: "nowrap",
        }}
      >
        <ListItemText>
          <Typography variant="body1">{item.title}</Typography>
        </ListItemText>
        {!collapse ? null : open === index ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    );
  };
  const renderCollapse = (item, index) => (
    <Collapse in={open === index} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {item.children.map((item, index) => {
          return (
            <Link to={`/playlist/${item.id}`} key={item.id}>
              <ListItemButton
                sx={{
                  pl: 4,
                  height: "24px",
                  mt: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                <ListItemText>
                  <Typography variant="body2">{item.title}</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Collapse>
  );

  const ItemRender = ({ item, index }) => {
    if (item.children.length > 0) {
      return (
        <React.Fragment key={item.id}>
          {renderItem(item, index, true)}
          {renderCollapse(item, index)}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={item.id}>
          {renderItem(item, index, false)}
        </React.Fragment>
      );
    }
  };

  if (isLoading || !data) return <PlaylistSkeleton />;

  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="div"
      aria-labelledby="nested-list-subheader"
    >
      {data.map((item, index) => {
        return <ItemRender key={item.id} item={item} index={index} />;
      })}
    </List>
  );
}

export default MenuCollapseItem;
