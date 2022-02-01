import Box from "@mui/material/Box";
import Header from './Header'
import List from './List'
import {useActivityState} from "./ActivityContext";
function ActivityBody(){
    const {open}= useActivityState()
    return (
        <Box sx={{backgroundColor: "secondary.1",
            width: open ? "242px": '32px',
            height: "100%",
            padding:"17px 10px 17px 10px",display:"flex",
            flexDirection:"column",
            transition:"all  .3s ease-out"
        }}>
            <Header/>
            {open && <List/>}
        </Box>
    )
}
export default ActivityBody