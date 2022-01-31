import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {ReactComponent as DotsIcon} from "assets/icons/dots.svg";
import {ReactComponent as FolderIcon} from "assets/icons/folderSimple.svg";
import {ReactComponent as ListsIcon} from "assets/icons/listBullets.svg";
import MenuCollapseItem from "components/molecules/MenuCollapseItem";
import MenuItemPlaylist from "../../molecules/MenuItemPlaylist";
function Playlists () {
    const [openList , setOpenList] = React.useState('folder')

    const handleClickChangeList = (openList) => {
        setOpenList(openList)
    }
    const renderList = openList === "folder" ? (<MenuCollapseItem />) : (<MenuItemPlaylist />)
    return (
        <>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between" , width:"100%", padding:"4px 7px 4px 16px"}}>
            <Typography variant="h4">Playlists</Typography>
            <Box sx={{color:"white", width:"16px", height:"16px" , cursor:"pointer"}}><DotsIcon/></Box>
        </Box>
        <Box sx={{display:"flex", alignItems:"center" , width:"100%", padding:"4px 7px 4px 16px", "& > * ~ * ":{
                marginLeft:"10px"
            }}}>
           <Box sx={{width:"16px", height:"16px", color:openList === "folder" ? "primary.main" : "white", cursor:"pointer"}}
                onClick={()=> handleClickChangeList('folder')}
           >
               <FolderIcon/>
           </Box>
            <Box sx={{width:"16px", height:"16px", color:openList === "playlist" ? 'primary.main' :"white", cursor:"pointer"}}
                 onClick={()=> handleClickChangeList('playlist')}>
                <ListsIcon/>
            </Box>
        </Box>
            {renderList}
        </>
    )
}
export default Playlists