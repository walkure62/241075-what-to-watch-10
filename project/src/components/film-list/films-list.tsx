import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';

type FilmsListProps = {
  films: Films[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const renderedFilmCount = useAppSelector((state) => state.renderedFilmCount);

  const filmsList =
      films?.slice(0, renderedFilmCount).map((film) => (
        <FilmCard film={film} key={String(film.id)} id={film.id} previewImage={film.previewImage} name={film.name} />
      ));

  return (
    <>
      <div className="catalog__films-list">
        {filmsList}
      </div>
      <ShowMoreButton films={films} />
    </>
  );
}

export default FilmsList;
