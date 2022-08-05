import Footer from '../../components/footer/footer';
import { Films } from '../../types/films';
import Header from '../../components/header/header';
import { useNavigate, useParams } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import { Reviews } from '../../types/reviews';
import SimilarFilmsList from '../../components/similar-film-list/similar-film-list';

type FilmScreenProps = {
  films: Films[];
  reviews: Reviews[];
  isAuth: boolean;
};

function FilmScreen({ films, reviews, isAuth }: FilmScreenProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Films;
  const similarFilms = films.filter((filmA) => (filmA.genre === film.genre) && filmA.id !== film.id);

  const onPlayButtonClickHandler = () => {
    const path = `/player/${film.id}`;
    navigate(path);
  };

  const onMyListButtonClickHandler = () => {
    const path = '/mylist';
    navigate(path);
  };
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isAuth={isAuth} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={onPlayButtonClickHandler}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={onMyListButtonClickHandler}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs film={film} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilmsList similarFilms={similarFilms} />
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
