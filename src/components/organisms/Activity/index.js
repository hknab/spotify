import Box from "@mui/material/Box";
import ActivityContext from "./ActivityContext";
import ActivityBody from "./ActivityBody";
//TODO: refactor context directory

function Activity () {
    return (<ActivityContext><ActivityBody/></ActivityContext>)
}
export default  Activity