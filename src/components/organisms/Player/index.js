import PlayerBody from "./PlayerBody";
import PlayerContext from "context/PlayerContext";
import ControlContext from '../../../context/ControlContext'
function Player (){
    return (
        <PlayerContext>
            <ControlContext>
                <PlayerBody/>
            </ControlContext>
        </PlayerContext>
    )
}
export default Player