import Actor from '../../components/actor/actor';
import { getFilm } from '../../store/film-process/selectors';
import { humanizeFilmDuration } from '../../utils/humanize';
import { useAppSelector } from '../../hooks';


function FilmScreenDetails(): JSX.Element {
  const film = useAppSelector(getFilm);
  const actorsList = film?.starring?.map((actor: string) =>
    <Actor key={actor} star={actor} />
  );

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          {actorsList}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film?.runTime !== undefined ? humanizeFilmDuration(film.runTime) : 'Unknown'}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmScreenDetails;
