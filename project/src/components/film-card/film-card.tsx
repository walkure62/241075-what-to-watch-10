import { Films } from '../../types/films';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import VideoPlayer from '../../components/video-player/video-player';

type FilmCardProps = {
  films: Films[];
  key: number;
  id: number;
  previewImage: string;
  name: string;
  setActiveFilm: (id: number) => void;
};

function FilmCard({
  films,
  key,
  id,
  previewImage,
  name,
  setActiveFilm,
}: FilmCardProps): JSX.Element {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPlaying, setIsPlaying] = useState(false);
  const film = films.find((filmA) => String(filmA.id) === params.id) as Films;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveFilm(id)}
      onMouseOver={() => {
        setActiveFilm(id);
        setIsPlaying(true);
      }}
      onMouseOut={() => {
        setIsPlaying(false);
      }}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          title={`/films/${id}`}
          className="small-film-card__link"
        >
          <VideoPlayer film={film} isPlaying/>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
