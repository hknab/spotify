import Box from "@mui/material/Box";
import ActivityLayout from "./Activity";
import NavbarLayout from "./Navbar";
import PlayerLayout from "./Player";
import Content from './Content'
import {Outlet} from 'react-router-dom'

function MainLayout({children}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gridAutoColumns: "max-content",
        gridTemplateRows: "auto",
        gridAutoRows: "max-content",
        gridTemplateAreas: '"nav content activity" "play play play"',
        height: "100vh",
        width: "100%",
          overflow:"hidden"
      }}
    >
      <Box sx={{ gridArea: "nav" }}>
        <NavbarLayout />
      </Box>
      <Box sx={{ gridArea: "content" }}>
          <Content >
              <Outlet/>
          </Content>
      </Box>
      <Box sx={{ gridArea: "activity" }}>
        <ActivityLayout />
      </Box>
      <Box sx={{ gridArea: "play" }}>
        <PlayerLayout />
      </Box>
    </Box>
  );
}
export default MainLayout;
