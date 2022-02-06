import React from 'react'
import Box from '@mui/material/Box';
import Info from 'components/molecules/player/Info';
import Controls from 'components/molecules/player/Controls';
import TimeLine from 'components/molecules/player/TimeLine';
import Adjust from 'components/molecules/player/Adjust';
import Audio from "./Audio";
import Fullscreen from "./Fullscreen";
import PlayerSkeleton from "skeletons/PlayerSkeleton";
import  {usePlayerActions , usePlayerState} from "context/PlayerContext";
import{useMusics} from 'hooks/music';
import {useUpdateUser, useUser} from "hooks/user";
import {useControlState , useControlSetState} from "context/ControlContext";

function PlayerBody (){
    const {data , isLoading } = useMusics()
    const {setPlaylist} = usePlayerActions()
    const {playlist } = usePlayerState()

    React.useEffect(()=> {
       if(!isLoading){
           setPlaylist(data , 19)
       }
    },[data])



    if(!playlist.length) return (<PlayerSkeleton/>)
    return (
        <>
            <Audio/>
            <Fullscreen/>
            <Box sx={{display:"flex" , alignItems:"center", justifyContent:"space-between" , width:"100%", height:"100%", padding:"24px 16px"}}>
                <Box sx={{width:"243px"}}>
                    <Info/>
                </Box>
                <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between" , flexDirection:"column", height:"100%", minWidth:"min-content", width:"560px"}}>
                    <Controls/>
                    <TimeLine/>
                </Box>
                <Box sx={{width:"210"}}>
                    <Adjust/>
                </Box>

            </Box>
        </>
    )
}
export default PlayerBody