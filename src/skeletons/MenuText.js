import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const MenuText = ({ children }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="193px"
      height="24px"
      sx={{ padding: "4px 16px 4px 24px" }}
    >
      <Skeleton variant="string" height="12px">
        <Typography variant="body1">Hip-Hop</Typography>
      </Skeleton>
      <Skeleton variant="circular" width="12px" height="12px"></Skeleton>
    </Stack>
  );
};

export default MenuText;
