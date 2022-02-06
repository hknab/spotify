import React from 'react'
import  Box from '@mui/material/Box'
import Skeleton from "@mui/material/Skeleton";
import Controls from "../components/molecules/player/Controls";
import TimeLine from "../components/molecules/player/TimeLine";
import Adjust from "../components/molecules/player/Adjust";
function PlayerSkeleton(){
    return(
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%" , height:"100%", padding:"15px"}}>
            <Box sx={{display:"flex", alignItems:"center" , width:"243px"}}>
                <Skeleton variant="rectangular" height="48px" width="48px" sx={{marginRight:"10px"}}/>
                <Skeleton variant="text" width="150px"/>
            </Box>

            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-evenly" , flexDirection:"column", height:"100%", minWidth:"min-content", width:"560px"}}>
                <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between",width:"140px"}}>
                    <Skeleton variant="circular" width="15px" height="15px"/>
                    <Skeleton variant="circular" width="15px" height="15px"/>
                    <Skeleton variant="circular" width="35px" height="35px"/>
                    <Skeleton variant="circular" width="15px" height="15px"/>
                    <Skeleton variant="circular" width="15px" height="15px"/>
                </Box>

                    <Skeleton variant="text" width="100%"/>


            </Box>
            <Box sx={{width:"210px", display:"flex", alignItems:"center", justifyContent:"space-between", height:"100%"}}>
                <Skeleton variant="circular" width="15px" height="15px"/>
                <Skeleton variant="circular" width="15px" height="15px"/>
                <Skeleton variant="circular" width="15px" height="15px"/>
                <Skeleton variant="text" width="72px"/>
                <Skeleton variant="circular" width="15px" height="15px"/>
                <Skeleton variant="circular" width="15px" height="15px"/>

            </Box>
        </Box>
    )
}
export default PlayerSkeleton