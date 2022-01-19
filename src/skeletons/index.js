import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Skeleton from "@mui/material/Skeleton";
// import Typography from "@mui/material/Typography";
//local
import Button from "./Button";
import MenuButton from "./MenuButton";
import MenuText from "./MenuText";
import Activity from "./Activity";
function Skeletons({ component }) {
  const renderSkeleton = () => {
    switch (component) {
      case "button":
        return <Button></Button>;
      case "menu-button":
        return <MenuButton />;
      case "menu-text":
        return <MenuText />;
      case "activity":
        return <Activity />;
      default:
        return null;
    }
  };
  return <>{renderSkeleton()}</>;
}

export default Skeletons;
