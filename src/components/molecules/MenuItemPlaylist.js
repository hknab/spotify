import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {usePlaylists} from 'hooks/playlist'

function MenuCollapseItem() {
    const {data , isLoading} = usePlaylists()
    const ItemRender = ({item ,index}) => {
            return (
                <>
                    <ListItemButton
                        sx={{ padding: " 4px 16px 4px 24px", height: "24px" }}
                    >
                        <ListItemText>
                            <Typography variant="body1">{item.title}</Typography>
                        </ListItemText>
                    </ListItemButton>
                </>
            )

    }
    if (isLoading) return (
        <h1>Loading...</h1>
    )

    return (
        <List
            sx={{ width: "100%", maxWidth: 360,  }}
            component="div"
        >
            {data.map((item , index)=> <ItemRender key={index} item={item} index={index} />)}
        </List>
    );
}

export default MenuCollapseItem;
