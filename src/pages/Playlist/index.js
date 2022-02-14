import React from "react";
import PlaylistBody from "./PlaylistBody";
import PlaylistContext from "context/PlaylistContext";

function Playlist() {
  return (
    <PlaylistContext>
      <PlaylistBody />
    </PlaylistContext>
  );
}

export default Playlist;
