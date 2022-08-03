/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { Films } from '../../types/films';

type VideoPlayerProps = {
  film: Films;
  isPlaying: boolean;
}

function VideoPlayer({film, isPlaying}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying]);


  return (
    <video height="175" ref={videoRef} src={film.previewVideoLink} muted={isMuted} poster={film.previewImage}/>
  );
}

export default VideoPlayer;
