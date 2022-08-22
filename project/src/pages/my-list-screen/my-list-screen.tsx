import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setActiveFilm] = useState(0);

  const setActive = (id: number) => {
    setActiveFilm(id);
  };

  const filmsList =
    films &&
    films.map((film) => (
      <FilmCard film={film} key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveFilm={setActive}/>
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
