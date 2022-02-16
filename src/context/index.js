import React from "react";
import SearchContext from "./SearchContext";
import PlayerContext from "./PlayerContext";
function ContextProvider({ children }) {
  return (
    <PlayerContext>
      <SearchContext>{children}</SearchContext>
    </PlayerContext>
  );
}

export default ContextProvider;
