import Box from "@mui/material/Box";
import { useActivities } from "hooks/activity";
import Activity from "components/molecules/Activity";

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
            avatar: `http://localhost:4000${activity.avatar}`,
          }}
        />
      ))}
    </Box>
  );
}

export default List;
