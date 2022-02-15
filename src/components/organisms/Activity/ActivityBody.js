import Box from "@mui/material/Box";
import Header from "./Header";
import List from "./List";
import { useActivityState } from "context/ActivityContext";
function ActivityBody() {
  const { open } = useActivityState();
  return (
    <Box
      sx={{
        backgroundColor: "secondary.1",
        width: open ? "242px" : "32px",
        height: "100%",
        padding: open ? "17px 10px 17px 10px" : "17px 0",
        display: "flex",
        flexDirection: "column",
        transition: "all  .3s ease-out",
        alignItems: !open && "center",
      }}
    >
      <Header />
      {open && <List />}
    </Box>
  );
}
export default ActivityBody;
