import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import { getPromoFilm } from '../../store/film-process/selectors';
import { getFilms, getFilteredFilms } from '../../store/films-process/selectors';
import { getFavoriteFilmsLength } from '../../store/favorite-process/selectors';
import { getLoadingDataStatus } from '../../store/film-process/selectors';
import Header from '../../components/header/header';
import { useNavigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen(): JSX.Element {
  const films = useAppSelector(getFilms);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const promo = useAppSelector(getPromoFilm);
  const favoriteFilmsLength = useAppSelector(getFavoriteFilmsLength);
  const isLoading = useAppSelector(getLoadingDataStatus);

  const navigate = useNavigate();

  const myListButtonClickHandler = () => {
    const path = '/mylist';
    navigate(path);
  };

  const playButtonClickHandler = () => {
    const path = `/player/${films[0].id}`;
    navigate(path);
  };

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promo?.backgroundImage}
            alt={promo?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promo?.posterImage}
                alt={promo?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => playButtonClickHandler()}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => myListButtonClickHandler()}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsLength}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList films={filteredFilms} />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default MainScreen;
