import { useControlActions, useControlState } from "context/ControlContext";
import { usePlayerActions, usePlayerState } from "context/PlayerContext";
import React from "react";

function Audio() {
  const ref = React.useRef();
  const [loaded, setLoaded] = React.useState(false);
  const [ended, setEnded] = React.useState(false);

  const { setDuration, setTime, setPosition } = useControlActions();
  const { volume, position } = useControlState();
  const control = useControlState();

  const { playlist, repeat, play, playingMusic } = usePlayerState();
  const { musics } = playlist;
  const { getNext } = usePlayerActions();

  //Load and config ref.current
  React.useEffect(() => {
    if (!playingMusic || !ref.current) return null;
    ref.current.src = `${process.env.REACT_APP_API_URL}/${playingMusic.src}`;

    ref.current.onloadedmetadata = onLoaded;
    ref.current.onended = () => {
      setEnded(true);
    };
  }, [playingMusic, musics]);

  //handle change Play and Pause and volume
  React.useEffect(() => {
    if (!loaded) return null;
    if (play) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    ref.current.volume = volume / 100;
  }, [play, control.volume, loaded]);
  // On loaded ref.current meta data
  const onLoaded = () => {
    setLoaded(true);
    if (play) ref.current.play();
    setDuration(Math.floor(ref.current.duration));
    ref.current.ontimeupdate = () => {
      if (position === "selecting") return null;
      setTime(Math.floor(ref.current.currentTime));
    };
  };
  //Change current time with slider
  React.useEffect(() => {
    if (!loaded) return null;
    if (position != null && position !== "selecting") {
      ref.current.currentTime = position;
      setTime(Math.floor(ref.current.currentTime));
      setPosition(null);
    }
  }, [position]);

  // on end music
  React.useEffect(() => {
    if (!ended) return null;
    setEnded(false);
    if (repeat) {
      ref.current.currentTime = 0;
      setTime(0);
      ref.current.play();
    } else {
      getNext();
    }
  }, [ended]);

  return <audio ref={ref} preload="metadata" />;
}
export default Audio;
