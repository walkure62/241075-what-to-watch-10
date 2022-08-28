import FilmsList from '../film-list/films-list';
import { fetchSimilarFilms } from '../../store/api-action';
import { getSimilarFilms } from '../../store/film-process/selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

function SimilarFilmsList(): JSX.Element {
  const similarFilms = useAppSelector(getSimilarFilms);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSimilarFilms(params?.id));
  }, [params?.id, dispatch]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length > 0 ? (
        <FilmsList films={similarFilms} />
      ) : (
        <p>Sory, but we can&apos;t find siimilar films in out database</p>
      )}
    </section>
  );
}

export default SimilarFilmsList;
