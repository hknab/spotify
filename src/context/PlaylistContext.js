import { createContext, useState, useContext } from "react";

const ContextState = createContext();
const ContextSetState = createContext();

const initialState = {
  searchQuery: "",
};

function PlaylistContext({ children }) {
  const [state, setState] = useState(initialState);
  return (
    <ContextState.Provider value={state}>
      <ContextSetState.Provider value={setState}>
        {children}
      </ContextSetState.Provider>
    </ContextState.Provider>
  );
}
export { ContextState, ContextSetState };
export function usePlaylistState() {
  return useContext(ContextState);
}
export function usePlaylistSetState() {
  return useContext(ContextSetState);
}
export function usePlaylistActions() {
  const setState = usePlaylistSetState();
  const setSearchQuery = (searchQuery) => {
    setState((prev) => ({ ...prev, searchQuery }));
  };

  return {
    setSearchQuery,
  };
}
export default PlaylistContext;
