import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const Activity = ({ children }) => {
  return (
    <Stack direction="row" width="221px" height="56px" sx={{ padding: "8px" }}>
      <Skeleton
        animation="wave"
        variant="circular"
        width="36px"
        height="36px"
        sx={{ marginRight: "8px" }}
      ></Skeleton>
      <Stack>
        <Skeleton animation="wave" width="64px" height="12px" />
        <Skeleton animation="wave" width="155px" height="12px" />
        <Skeleton animation="wave" width="155px" height="14px" />
      </Stack>
    </Stack>
  );
};

export default Activity;
