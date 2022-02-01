import Box from '@mui/material/Box'
import Info from 'components/molecules/player/Info'
import Controls from 'components/molecules/player/Controls'
import TimeLine from 'components/molecules/player/TimeLine'
import Adjust from 'components/molecules/player/Adjust'
function Player (){
    return (
        <Box sx={{display:"flex" , alignItems:"center", justifyContent:"space-between" , width:"100%", height:"100%", padding:"24px 16px"}}>
            <Info/>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between" , flexDirection:"column", height:"100%", minWidth:"min-content"}}>
                <Controls/>
                <TimeLine/>
            </Box>
            <Adjust/>
        </Box>
    )
}
export default Player