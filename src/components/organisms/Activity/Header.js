import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as FriendsIcon } from "assets/icons/friend-empty.svg";
import { ReactComponent as ArrowRightIcon } from "assets/icons/arrowRIght.svg";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrowLeft.svg";
import { useActivityState, useActivityActions } from "context/ActivityContext";

function Header() {
  const { setActivityClose, setActivityOpen } = useActivityActions();
  const { open } = useActivityState();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginBottom: "8px",
          justifyContent: !open && "center",
        }}
      >
        <FriendsIcon width="22px" height="22px" />

        {open && (
          <Typography
            variant="h4"
            sx={{ marginLeft: "39px", whiteSpace: "nowrap" }}
          >
            Friends Activity
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
          width: "100%",
        }}
      >
        {open ? (
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setActivityClose();
            }}
          >
            <ArrowRightIcon width="22px" height="22px" />
          </Box>
        ) : (
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setActivityOpen();
            }}
          >
            <ArrowLeftIcon width="22px" height="22px" />
          </Box>
        )}
      </Box>
    </>
  );
}
export default Header;
