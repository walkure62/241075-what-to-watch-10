import { getFilm } from '../../store/film-process/selectors';
import { MAX_ACTORS_IN_OVERVIEW } from '../../const';
import { useAppSelector } from '../../hooks';

function FilmScreenOverview(): JSX.Element {
  const film = useAppSelector(getFilm);
  const actorsList = film?.starring.slice(0, MAX_ACTORS_IN_OVERVIEW).join(', ');

  const ratingLevelDescription = (rating: number | undefined) => {
    if (rating) {
      if (rating === 10) {
        return 'Awesome';
      } else if (rating >= 8 && rating < 10) {
        return 'Very good';
      } else if (rating >= 5 && rating < 8) {
        return 'Good';
      } else if (rating >= 3 && rating < 5) {
        return 'Normal';
      } else if (rating >= 0 && rating < 3) {
        return 'Bad';
      }
    }
    return 'Unknown';
  };

  const style = (rating: string) => {
    switch(rating) {
      case 'Awesome':
        return {backgroundColor: '#66c934', color: 'white'};
      case 'Very good':
        return {backgroundColor: '#458326', color: 'white'};
      case 'Good':
        return {backgroundColor: '#ffcc33', color: 'white'};
      case 'Normal':
        return {backgroundColor: '#ffdc71', color: 'white'};
      case 'Bad':
        return {backgroundColor: '#e21b1b', color: 'white'};
      case 'Unknown':
        return {backgroundColor: '#fff7f7'};
    }
  };


  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score" style={style(ratingLevelDescription(film?.rating))}>{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevelDescription(film?.rating)}</span>
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
