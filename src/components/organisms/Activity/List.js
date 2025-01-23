import Box from "@mui/material/Box";
import Activity from "components/molecules/Activity";
import { useActivities } from "hooks/activity";

function List() {
  const { data: activities, isLoading: activitiesLoading } = useActivities({
    refetchOnMount: false,
  });
  if (activitiesLoading) return <h1>Loading...</h1>;
  return (
    <Box className={"scrollbar"} sx={{ padding: "10px 0", width: "100%" }}>
      {activities.map((activity, index) => (
        <Activity
          key={activity.title}
          data={{
            ...activity,
            avatar: `${process.env.REACT_APP_API_URL}/${activity.avatar}`,
          }}
        />
      ))}
    </Box>
  );
}

export default List;
