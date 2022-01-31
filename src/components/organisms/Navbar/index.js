import Box from "@mui/material/Box";
import NavbarHeader from "components/molecules/NavbarHeader";
import MenuItems from "./MenuItems";
import Playlists from './Playlists'
function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.1",
        width: "256px",
        height: "100%",
        padding: "32px 31px 32px 31px",
          overflowY: 'auto',
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", }}
      >
        <NavbarHeader />
        <MenuItems />
          <Playlists/>
      </Box>
    </Box>
  );
}

export default Navbar;
