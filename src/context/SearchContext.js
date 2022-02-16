import { createContext, useState, useContext } from "react";

const ContextState = createContext();
const ContextSetState = createContext();

const initialState = {
  searchQuery: "",
};

function SearchContext({ children }) {
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
export function useSearchState() {
  return useContext(ContextState);
}
export function useSearchSetState() {
  return useContext(ContextSetState);
}
export function useSearchActions() {
  const setState = useSearchSetState();
  const setSearchQuery = (searchQuery) => {
    setState((prev) => ({ ...prev, searchQuery }));
  };

  return {
    setSearchQuery,
  };
}
export default SearchContext;
