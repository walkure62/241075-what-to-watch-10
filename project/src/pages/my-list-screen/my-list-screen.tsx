import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import { Films } from '../../types/films';
import Header from '../../components/header/header';
import { useState } from 'react';

type MyListScreenProps = {
  films: Films[];
  isAuth: boolean;
}

function MyListScreen({films, isAuth}: MyListScreenProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setActiveFilm] = useState(0);

  const setActive = (id: number) => {
    setActiveFilm(id);
  };

  const filmsList =
    films &&
    films.map((film) => (
      <FilmCard films={films} key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveFilm={setActive}/>
    ));
  return (
    <div className="user-page">

      <Header isAuth = {isAuth} />

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
