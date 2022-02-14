import React from "react";
const ControlState = React.createContext();
const ControlSetState = React.createContext();

const initialState = {
  time: 0,
  duration: 1,
  volume: 50,
  position: null, // null, selecting , number(34)
};

function ControlContext({ children }) {
  const [state, setState] = React.useState(initialState);

  return (
    <ControlState.Provider value={state}>
      <ControlSetState.Provider value={setState}>
        {children}
      </ControlSetState.Provider>
    </ControlState.Provider>
  );
}
export function useControlState() {
  return React.useContext(ControlState);
}
export function useControlSetState() {
  return React.useContext(ControlSetState);
}
export function useControlActions() {
  const setControlState = useControlSetState();

  const setTime = (time) => setControlState((prev) => ({ ...prev, time }));
  const setDuration = (duration) => {
    setControlState((prev) => ({ ...prev, duration }));
  };
  const setVolume = (volume) =>
    setControlState((prev) => ({ ...prev, volume }));
  const setPosition = (position) => {
    setControlState((prev) => ({ ...prev, position }));
  };
  return { setTime, setVolume, setDuration, setPosition };
}
export default ControlContext;
