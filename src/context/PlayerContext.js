import React, { useContext, useState } from "react";
import { useControlActions } from "./ControlContext";
const PlayerState = React.createContext();
const PlayerSetState = React.createContext();
const initialState = {
  playlist: { musics: [] },
  playingMusic: {},
  shuffle: false,
  repeat: false,
  indexLogs: [],
  fullscreen: false,
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
  const { setTime, setPosition } = useControlActions();

  const setRepeat = () =>
    setPlayerState((prev) => ({ ...prev, repeat: !prev.repeat }));

  const setShuffle = () =>
    setPlayerState((prev) => ({ ...prev, shuffle: !prev.shuffle }));

  const togglePlay = () =>
    setPlayerState((prev) => ({ ...prev, play: !prev.play }));

  const setPlayerMusic = (playlist, musicId) => {
    const set = (prev) => {
      const musicIndex = playlist.musics?.findIndex((t) => t.id === musicId);
      return {
        ...prev,
        playlist,
        playingMusic: { ...playlist.musics[musicIndex] },
        play: true,
      };
    };
    setPlayerState(set);
  };

  const setPlayerPlaylist = (playlist, play = true) => {
    const set = (prev) => {
      if (prev.shuffle) {
        const max = playlist.musics.length - 1;
        const musicIndex = Math.floor(Math.random() * max);
        return {
          ...prev,
          playlist,
          playingMusic: playlist.musics[musicIndex],
          play,
        };
      } else {
        return {
          ...prev,
          playlist,
          playingMusic: playlist.musics[0],
          play,
        };
      }
    };
    setPlayerState(set);
  };

  const getNext = () =>
    setPlayerState((prev) => {
      const { shuffle, indexLogs, playlist, playingMusic } = prev;
      const { musics } = playlist;
      const logs = indexLogs;
      const max = musics.length - 1;
      const min = 0;
      const playingMusicIndex = musics.findIndex(
        (t) => t.id === playingMusic.id
      );
      if (max === 0) return { ...prev };
      setTime(0);
      const buildIndexLogs = (musicIndex) => {
        if (logs.length === 5) {
          logs.shift();
          logs.push(musicIndex);
          return logs;
        } else {
          logs.push(musicIndex);
          return logs;
        }
      };

      if (shuffle) {
        const randomIndex = () => {
          const next = playingMusicIndex + 1;
          if (max <= 5) {
            if (next > max) {
              return 0;
            } else {
              return next;
            }
          }
          const random = Math.floor(Math.random() * max + 1);
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
          playingMusic: musics[newItemIndex],
          indexLogs: newIndexLogs,
        };
      } else if (playingMusicIndex < max) {
        const newItemIndex = playingMusicIndex + 1;
        const newIndexLogs = buildIndexLogs(newItemIndex);
        return {
          ...prev,
          playingMusic: musics[newItemIndex],
          indexLogs: newIndexLogs,
        };
      } else {
        const newItemIndex = min;
        const newIndexLogs = buildIndexLogs(newItemIndex);

        return {
          ...prev,
          playingMusic: musics[newItemIndex],
          indexLogs: newIndexLogs,
        };
      }
    });

  const getPrevious = () =>
    setPlayerState((prev) => {
      const { indexLogs, playlist, playingMusic } = prev;
      const { musics } = playlist;
      const logs = indexLogs;
      const max = musics.length - 1;
      const min = 0;
      const playingMusicIndex = musics.findIndex(
        (t) => t.id === playingMusic.id
      );
      if (max === 0) {
        setPosition(0);
        return { ...prev };
      }
      setTime(0);

      if (indexLogs.length > 1) {
        logs.pop();
        const newMusicIndex = logs[logs.length - 1];
        return {
          ...prev,
          playingMusic: musics[newMusicIndex],
          indexLogs: logs,
        };
      } else if (playingMusicIndex > min) {
        return {
          ...prev,
          playingMusic: musics[playingMusicIndex - 1],
          indexLogs: [],
        };
      } else {
        return {
          ...prev,
          playingMusic: musics[max],
          indexLogs: [],
        };
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
    toggleFullscreen,
    togglePlay,
    setPlayerPlaylist,
    setPlayerMusic,
  };
}

export default PlayerContext;
