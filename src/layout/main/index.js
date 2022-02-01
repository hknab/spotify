import Box from "@mui/material/Box";
import ActivityLayout from "./Activity";
import Content from "./Content";
import NavbarLayout from "./Navbar";
import Player from "./Player";
function MainLayout() {
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
        <Content />
      </Box>
      <Box sx={{ gridArea: "activity" }}>
        <ActivityLayout />
      </Box>
      <Box sx={{ gridArea: "play" }}>
        <Player />
      </Box>
    </Box>
  );
}
export default MainLayout;
