import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeletons from "skeletons";
import NavbarHeader from "components/molecules/NavbarHeader";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.1",
        width: "256px",
        height: "100%",
        padding: "32px 31px 32px 31px",
      }}
    >
      <Grid container direction="column" alignItems="center">
        <NavbarHeader />
        <Skeletons component="menu-button" />
      </Grid>
    </Box>
  );
}

export default Navbar;
