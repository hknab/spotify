import React from "react";

const PlayerData = React.createContext();
const PlayerSetData = React.createContext();

const initialData = {
  playList: [], //playing playList
  item: null, // item index
  next: null, //next music item index
  before: null, //before music item index
  play: true,
  time: 0,
  shuffle: false,
  repeat: false,
  volume: 50,
};

function PlayerContext({ children }) {
  const [data, setData] = React.useState(initialData);
  return (
    <PlayerData.Provider value={data}>
      <PlayerSetData.Provider value={setData}>
        {children}
      </PlayerSetData.Provider>
    </PlayerData.Provider>
  );
}

export function usePlayerState() {
  return React.useContext(PlayerData);
}
export function usePlayerSetState() {
  return React.useContext(PlayerSetData);
}
export function usePlayerActions() {
  const setPlayerData = usePlayerSetState();
  const setVolume = (vol) =>
    setPlayerData((prev) => ({ ...prev, volume: vol }));
  const setPlay = () =>
    setPlayerData((prev) => ({ ...prev, play: !prev.play }));
  const setRepeat = () =>
    setPlayerData((prev) => ({ ...prev, repeat: !prev.repeat }));
  const setShuffle = () =>
    setPlayerData((prev) => ({ ...prev, shuffle: !prev.shuffle }));
  const setTime = (time) => setPlayerData((prev) => ({ ...prev, time }));
  return { setVolume, setPlay, setRepeat, setShuffle, setTime };
}

export default PlayerContext;
