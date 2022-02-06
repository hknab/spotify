import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton";
function PlaylistSkeleton(){
    return (
        <Box sx={{display:"flex", flexDirection:"column",width:"100%", alignItems:"center",padding:"0 16px 0 24px", "& > *":{
            height:"20px"
            }, "&>* ~ * ":{
            marginTop:"5px",
            }}}>
            <Skeleton variant="text" width="100%"/>
            <Skeleton variant="text" width="100%"/>
            <Skeleton variant="text" width="100%"/>
            <Skeleton variant="text" width="100%"/>
            <Skeleton variant="text" width="100%"/>
            <Skeleton variant="text" width="100%"/>
        </Box>
    )

}
export default PlaylistSkeleton