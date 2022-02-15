import LogoFull from "components/atoms/LogoFull";
import Box from "@mui/material/Box";
import { ReactComponent as ArrowLeft } from "assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "assets/icons/arrowRIght.svg";
import { ReactComponent as LogoSmall } from "assets/images/logo.svg";

function NavbarHeader({ open, setNavbarOpen, setNavbarClose }) {
  if (open) {
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
        <Box sx={{ cursor: "pointer" }} onClick={() => setNavbarClose()}>
          <ArrowLeft width="22px" height="22px" />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%",
          height: "113px",
        }}
      >
        <Box onClick={() => setNavbarOpen()} sx={{ cursor: "pointer" }}>
          <ArrowRight width="22px" height="22px" />
        </Box>
        <LogoSmall width="36px" height="36px" />
      </Box>
    );
  }
}

export default NavbarHeader;
