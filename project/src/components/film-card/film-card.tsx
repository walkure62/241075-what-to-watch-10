import { Films } from '../../types/films';
import { Link } from 'react-router-dom';
import {PREVIEW_TIMEOUT} from '../../const';
import { useState, useEffect } from 'react';
import VideoPlayer from '../../components/video-player/video-player';

type FilmCardProps = {
  film: Films;
  id: number;
  previewImage: string;
  name: string;
  setActiveFilm: (id: number) => void;
};

function FilmCard({
  film,
  id,
  previewImage,
  name,
  setActiveFilm,
}: FilmCardProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCursorHold, setCursorHold] = useState(false);

  function handleMouseOver() {
    setActiveFilm(id);
    setIsPlaying(true);
    setCursorHold(true);
  }

  function handleMouseOut() {
    setCursorHold(false);
    setIsPlaying(false);
  }

  useEffect(() => {
    if (!isCursorHold) {
      return;
    }

    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, PREVIEW_TIMEOUT);

    return () => clearTimeout(timer);
  }, [isCursorHold]);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveFilm(id)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="small-film-card__image">
        <Link
          to={`/films/${id}`}
          title={`/films/${id}`}
          className="small-film-card__link"
        >
          {isPlaying ? <VideoPlayer film={film} isPlaying /> : <img src={previewImage} alt={name} width="280" height="175" />}
          <h3 className="small-film-card__title">{name}</h3>
        </Link>
      </div>
    </article>
  );
}

export default FilmCard;
