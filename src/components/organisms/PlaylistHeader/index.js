import React from "react";
import Box from "@mui/material/Box";
import gradient from "util/gradient";
import Typography from "@mui/material/Typography";

function PlaylistHeader({
  title,
  description,
  cover,
  Icon,
  backgroundColor,
  backgroundImage,
}) {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "306px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: gradient.green2,
          opacity: 0.2,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          padding: "98px 64px 0 64px",
        }}
      >
        <Box
          sx={{
            height: "158px",
            width: "158px",
            borderRadius: "8px",
            background: backgroundColor
              ? backgroundColor
              : backgroundImage &&
                `url(http://localhost:4000/${backgroundImage})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 4px 60px rgb(0 0 0 / 50%)",
          }}
        >
          {cover ? (
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              src={`http://localhost:4000${cover}`}
            ></Box>
          ) : (
            <Icon />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "7px 0",
            marginLeft: "32px",
            maxWidth: "calc(100% - 190px)",
            overflow: "hidden",
            "& > *": {
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            },
          }}
        >
          <Typography variant="h6">playlıst</Typography>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="body3" color="neutral.1">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PlaylistHeader;
