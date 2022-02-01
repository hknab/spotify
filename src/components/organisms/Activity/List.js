import Box from "@mui/material/Box";
import {useActivities} from "hooks/activity";
import Activity from "components/molecules/Activity";

function List () {
    const {data : activities , isLoading : activitiesLoading} = useActivities({refetchOnMount:false});
    if(activitiesLoading) return (<h1>Loading...</h1>)
    return (<Box className={"scrollbar"} sx={{ overflow:"overlay",padding:"10px 0"}}>
        {activities.map((activity , index)=>(
            <Activity key={index} data={{...activity, avatar: `http://localhost:3000${activity.avatar}`}}/>
        ))}
    </Box>)
}

export default List;