import { Films } from '../../types/films';
import FilmsList from '../film-list/films-list';

type SimilarFilmsListProps = {
  similarFilms: Films[];
};

function SimilarFilmsList({
  similarFilms,
}: SimilarFilmsListProps): JSX.Element {
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
