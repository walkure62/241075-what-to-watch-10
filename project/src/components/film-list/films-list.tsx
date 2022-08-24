import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

type FilmsListProps = {
  films: Films[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState({});

  const setActive = (id: number) => {
    const selectedCard = films.filter((film) => film.id === id);
    setActiveFilm(selectedCard);
  };

  const renderedFilmCount = useAppSelector((state) => state.renderedFilmCount);

  const filmsList =
      films?.slice(0, renderedFilmCount).map((film) => (
        <FilmCard film={film} key={String(film.id)} id={film.id} previewImage={film.previewImage} name={film.name} setActiveFilm={setActive}/>
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
