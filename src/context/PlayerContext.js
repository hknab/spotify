import React, { useContext, useState } from "react";
import {useControlActions} from './ControlContext'
const PlayerState = React.createContext();
const PlayerSetState = React.createContext();
const initialState = {
    playlist: [], //playing Playlist
    itemIndex: 0, // item index
    shuffle: false,
    repeat: false,
    indexLogs:[],
    fullscreen:false,
};

function PlayerContext({ children }) {
  const [state, setState] = useState(initialState);
  return (
    <PlayerState.Provider value={state}>
      <PlayerSetState.Provider value={setState}>
          {children}
      </PlayerSetState.Provider>
    </PlayerState.Provider>
  );
}

export function usePlayerState() {
  return useContext(PlayerState);
}
export function usePlayerSetState() {
  return useContext(PlayerSetState);
}



export function usePlayerActions() {
  const setPlayerState = usePlayerSetState();
    const {setTime} = useControlActions();
  const setRepeat = () =>
    setPlayerState((prev) => ({ ...prev, repeat: !prev.repeat }));
  const setShuffle = () =>
    setPlayerState((prev) => ({ ...prev, shuffle: !prev.shuffle }));
  const setPlaylist = (playlist , id ) => setPlayerState(prev => {
      const itemIndex  = playlist?.findIndex(t => t.id === id);
      return ({...prev , playlist, itemIndex})
  })
    const getNext = () => (
        setPlayerState(prev => {
            const {shuffle ,indexLogs } = prev;
            const logs = indexLogs;
            const {itemIndex , playlist} = prev;
            const max = playlist.length -1;
            const min = 0;
            setTime(0);

            const buildIndexLogs = (itemIndex)=>{
                if(logs.length === 3){
                    logs.shift()
                    logs.push(itemIndex)
                    return logs;
                }else {
                    logs.push(itemIndex)
                    return logs;
                }
            }

            if(shuffle){
                const randomIndex = () => {
                    const random = Math.floor(Math.random() * (max - min) + min);
                    const some = logs.some(log => (log === random));
                    if(some && playlist.length > 5) {
                        const rand = randomIndex()
                        return  rand;
                    }else{

                    return random;
                    }
                }
                const newItemIndex = randomIndex()
                const newIndexLogs = buildIndexLogs( newItemIndex)
                return ({...prev , itemIndex: newItemIndex, indexLogs: newIndexLogs})

            }else if(itemIndex < max)  {

                const newItemIndex = itemIndex +1
                const newIndexLogs = buildIndexLogs( newItemIndex)
                return ({...prev , itemIndex: newItemIndex, indexLogs: newIndexLogs})

            }else {

                const newItemIndex = min
                const newIndexLogs = buildIndexLogs( newItemIndex)
                return ({...prev , itemIndex: newItemIndex, indexLogs: newIndexLogs})

            }

        }))
    const getPrevious = () => (
        setPlayerState(prev => {
            const {indexLogs} = prev;
            const logs = indexLogs;
            const {itemIndex , playlist} = prev;
            const max = playlist.length -1;
            const min = 0;
            setTime(0)

            if(indexLogs.length > 1){
                logs.pop()
                const itemIndex = logs[logs.length - 1]
                return({...prev , itemIndex , indexLogs: logs})
            }else if(itemIndex > min) {
                return ({...prev, itemIndex: itemIndex - 1,indexLogs:[]})
            }else {
                return ({...prev, itemIndex: max,indexLogs:[]})
            }
        }))
    const toggleFullscreen = ()=>{
      setPlayerState(prev => ({...prev , fullscreen: !prev.fullscreen}))
    }
  return {  setRepeat, setShuffle,getNext,getPrevious,setPlaylist,toggleFullscreen };
}

export default PlayerContext;
