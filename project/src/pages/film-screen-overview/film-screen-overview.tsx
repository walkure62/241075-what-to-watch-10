import { getFilm } from '../../store/film-process/selectors';
import { MAX_ACTORS_IN_OVERVIEW } from '../../const';
import { useAppSelector } from '../../hooks';

function FilmScreenOverview(): JSX.Element {
  const film = useAppSelector(getFilm);
  const actorsList = film?.starring.slice(0, MAX_ACTORS_IN_OVERVIEW).join(', ');

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>
        <p>
          Gustave prides himself on providing first-className service to the
          hotel&apos;s guests, including satisfying the sexual needs of the many
          elderly women who stay there. When one of Gustave&apos;s lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless
          painting and the chief suspect in her murder.
        </p>

        <p className="film-card__director">
          <strong>Director: {film?.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {actorsList} and others</strong>
        </p>
      </div>
    </>
  );
}

export default FilmScreenOverview;
