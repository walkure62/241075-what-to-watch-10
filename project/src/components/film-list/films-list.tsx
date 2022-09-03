import FilmCard from '../film-card/film-card';
import { Films } from '../../types/films';
import { getRenderedFilmCount } from '../../store/genre-process/selectors';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';

type FilmsListProps = {
  films: Films[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const renderedFilmCount = useAppSelector(getRenderedFilmCount);

  const filmsList =
      films?.slice(0, renderedFilmCount).map((film) => (
        <FilmCard film={film} key={String(film.id)} id={film.id} previewImage={film.previewImage} name={film.name} />
      ));

  return (
    <>
      <div className="catalog__films-list" data-testid="catalog__films-list">
        {filmsList}
      </div>
      <ShowMoreButton films={films} />
    </>
  );
}

export default FilmsList;
