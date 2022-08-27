import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  const filmsList =
    films &&
    films.map((film) => (
      <FilmCard film={film} key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} />
    ));
  return (
    <div className="user-page">

      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          {filmsList}

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyListScreen;
