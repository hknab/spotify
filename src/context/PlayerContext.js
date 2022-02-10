import React, { useContext, useState } from "react";
import { useControlActions } from "./ControlContext";
const PlayerState = React.createContext();
const PlayerSetState = React.createContext();
const initialState = {
  playlist: [], //playing Playlist
  itemIndex: 0, // item index in playlist
  shuffle: false,
  repeat: false,
  indexLogs: [],
  fullscreen: false,
  playlistId: null,
  play: false,
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
  const { setTime } = useControlActions();

  const setRepeat = () =>
    setPlayerState((prev) => ({ ...prev, repeat: !prev.repeat }));

  const setShuffle = () =>
    setPlayerState((prev) => ({ ...prev, shuffle: !prev.shuffle }));

  const togglePlay = () =>
    setPlayerState((prev) => ({ ...prev, play: !prev.play }));

  const setPlaylistOrMusic = (playlist, playlistId, musicId) =>
    setPlayerState((prev) => {
      if (playlistId === prev.playlistId) {
        if (musicId !== prev.itemIndex) return { ...prev };
        const itemIndex = playlist?.findIndex((t) => t.id === musicId);
        return { ...prev, itemIndex, play: true };
      }
      if (prev.shuffle) {
        const max = playlist.length - 1;
        const random = Math.floor(Math.random() * max);
        return {
          ...prev,
          playlist,
          playlistId,
          itemIndex: random,
          play: true,
        };
      }
      return {
        ...prev,
        playlist,
        playlistId,
        itemIndex: 0,
        play: true,
      };
    });

  const getNext = () =>
    setPlayerState((prev) => {
      const { shuffle, indexLogs } = prev;
      const logs = indexLogs;
      const { itemIndex, playlist } = prev;
      const max = playlist.length - 1;
      const min = 0;
      setTime(0);

      const buildIndexLogs = (itemIndex) => {
        if (logs.length === 3) {
          logs.shift();
          logs.push(itemIndex);
          return logs;
        } else {
          logs.push(itemIndex);
          return logs;
        }
      };

      if (shuffle) {
        const randomIndex = () => {
          const random = Math.floor(Math.random() * max);
          const some = logs.some((log) => log === random);
          if (some) {
            const rand = randomIndex();
            return rand;
          } else {
            return random;
          }
        };
        const newItemIndex = randomIndex();
        const newIndexLogs = buildIndexLogs(newItemIndex);
        return {
          ...prev,
          itemIndex: newItemIndex,
          indexLogs: newIndexLogs,
        };
      } else if (itemIndex < max) {
        const newItemIndex = itemIndex + 1;
        const newIndexLogs = buildIndexLogs(newItemIndex);
        return {
          ...prev,
          itemIndex: newItemIndex,
          indexLogs: newIndexLogs,
        };
      } else {
        const newItemIndex = min;
        const newIndexLogs = buildIndexLogs(newItemIndex);

        return {
          ...prev,
          itemIndex: newItemIndex,
          indexLogs: newIndexLogs,
        };
      }
    });

  const getPrevious = () =>
    setPlayerState((prev) => {
      const { indexLogs } = prev;
      const logs = indexLogs;
      const { itemIndex, playlist } = prev;
      const max = playlist.length - 1;
      const min = 0;
      setTime(0);

      if (indexLogs.length > 1) {
        logs.pop();
        const itemIndex = logs[logs.length - 1];
        return { ...prev, itemIndex, indexLogs: logs };
      } else if (itemIndex > min) {
        return { ...prev, itemIndex: itemIndex - 1, indexLogs: [] };
      } else {
        return { ...prev, itemIndex: max, indexLogs: [] };
      }
    });

  const toggleFullscreen = () => {
    setPlayerState((prev) => ({ ...prev, fullscreen: !prev.fullscreen }));
  };

  return {
    setRepeat,
    setShuffle,
    getNext,
    getPrevious,
    setPlaylistOrMusic,
    toggleFullscreen,
    togglePlay,
  };
}

export default PlayerContext;
