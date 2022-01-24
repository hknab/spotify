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
