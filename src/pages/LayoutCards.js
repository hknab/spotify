import React from "react";
import Box from "@mui/material/Box";
import Header from "components/organisms/Header";

function LayoutCards({ children }) {
  const [background, setBackground] = React.useState({
    active: false,
    customColor: null,
  });
  const handleScroll = (e) => {
    if (e.target.scrollTop >= 40) {
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
      <Header background={background} />
      <Box
        sx={{
          padding: "0 32px",
          "& > *": {
            marginTop: "32px",
          },
          "&:last-child": {
            marginBottom: "100px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default LayoutCards;
