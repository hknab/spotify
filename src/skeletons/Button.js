import Skeleton from "@mui/material/Skeleton";
const Button = () => {
  return (
    <Skeleton
      variant="rectangular"
      height="28px"
      width="122px"
      sx={{ borderRadius: "31px", padding: "8px 24px" }}
    ></Skeleton>
  );
};

export default Button;
