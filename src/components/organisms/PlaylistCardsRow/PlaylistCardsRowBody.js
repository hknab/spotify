import React from "react";
import Box from "@mui/material/Box";
import Card from "components/molecules/Card";
import Typography from "@mui/material/Typography";
function PlaylistCardsRowBody({ list, title, keyword }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">
        {`${title} `}
        <span
          style={{
            background: keyword.color,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {keyword.text}
        </span>
      </Typography>
      <Box
        sx={{
          marginTop: "16px",
          display: "grid",
          gridAutoRows: 0,
          gridTemplateRows: "1fr",
          overflow: "hidden",
          gridGap: "24px",
          gridTemplateColumns: "repeat(auto-fill ,minMax(178px , 1fr))",
          maxHeight: "246px",
        }}
      >
        {list.map((id) => (
          <Card key={id} id={id} />
        ))}
      </Box>
    </Box>
  );
}

export default PlaylistCardsRowBody;
