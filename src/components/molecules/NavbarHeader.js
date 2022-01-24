import LogoFull from "components/atoms/LogoFull";
import Box from "@mui/material/Box";
import { ReactComponent as ArrowLeft } from "assets/icons/arrowLeft.svg";
function NavbarHeader() {
  return (
    <Box
      sx={{
        width: "193px",
        height: "45px",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <LogoFull />
      <ArrowLeft width="16px" height="16px" />
    </Box>
  );
}

export default NavbarHeader;
