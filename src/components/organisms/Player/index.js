import PlayerBody from "./PlayerBody";
import ControlContext from "context/ControlContext";
function Player() {
  return (
    <ControlContext>
      <PlayerBody />
    </ControlContext>
  );
}
export default Player;
