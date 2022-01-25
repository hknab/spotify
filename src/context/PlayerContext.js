import React from "react";

const PlayerData = React.createContext();
const PlayerSetData = React.createContext();

const initialData = {};

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
}

export default PlayerContext;
