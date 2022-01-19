import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const Button = ({ children }) => {
  return (
    <Stack
      direction="row"
      spacing="10px"
      width="193px"
      height="40px"
      alignItems="center"
      sx={{ borderRadius: "40px" }}
    >
      <Skeleton
        variant="circular"
        width={32}
        height={32}
        sx={{ marginLeft: "16px" }}
      ></Skeleton>
      <Skeleton variant="text" width={"50%"} height={16}>
        <Typography variant="body1"></Typography>
      </Skeleton>
    </Stack>
  );
};

export default Button;
