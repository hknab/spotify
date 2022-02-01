import Box from "@mui/material/Box";
import Activity from 'components/organisms/Activity'
function ActivityLayout() {
  return (
    <Box
      sx={{ height:"calc(100vh - 96px)"}}
    >
      <Activity/>
    </Box>
  );
}

export default ActivityLayout;
