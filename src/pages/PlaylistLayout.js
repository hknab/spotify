import React from "react";
import Box from "@mui/material/Box";
import Header from "components/organisms/Header";
import HeaderComponent from "./HeaderComponent";
function LayoutCards({ children }) {
  const [background, setBackground] = React.useState({
    active: false,
    customColor: null,
  });
  const handleScroll = (e) => {
    if (e.target.scrollTop >= 300) {
      if (background.active) return null;
      setBackground({ active: true, customColor: null });
    } else {
      setBackground({ active: false, customColor: null });
    }
  };

  return (
    <Box
      className="scrollbar"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <Header background={background} hideSearch>
        <HeaderComponent />
      </Header>
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}

export default LayoutCards;
