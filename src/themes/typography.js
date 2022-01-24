function typography(theme) {
  const { heading } = theme;
  return {
    fontFamily: ["'Lato'", "sans-serif"].join(","),
    h1: {
      color: heading,
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "80px",
      lineHeight: "96px",
    },
    h2: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "32px",
      lineHeight: "48px",
    },
    h3: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "24px",
    },
    h4: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "16px",
    },
    h5: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "12px",
      lineHeight: "12px",
    },
    h6: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "10px",
      lineHeight: "12px",
      /* identical to box height, or 120% */
      letterSpacing: "0.16em",
      textTransform: "uppercase",
    },
    body1: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "16px",
    },
    body2: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "14px",
    },
    body3: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "10px",
      lineHeight: "12px",
    },
    body4: {
      color: heading,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "10px",
      lineHeight: "12px",
      /* identical to box height, or 120% */
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
  };
}

export default typography;
