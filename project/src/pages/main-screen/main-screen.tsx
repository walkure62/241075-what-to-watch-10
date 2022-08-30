import { AuthorizationStatus } from '../../const';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import { getPromoFilm } from '../../store/film-process/selectors';
import { getFilteredFilms } from '../../store/films-process/selectors';
import { getLoadingDataStatus } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import MyListButton from '../../components/my-list-button/my-list-button';
import MyListButtonNoAuth from '../../components/my-list-button/my-list-button-no-auth';
import Header from '../../components/header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import { setFilm } from '../../store/action';
import { useNavigate} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { useEffect } from 'react';

function MainScreen(): JSX.Element {
  const filteredFilms = useAppSelector(getFilteredFilms);
  const promo = useAppSelector(getPromoFilm);
  const isLoading = useAppSelector(getLoadingDataStatus);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authtorizationStatus = useAppSelector(getAuthorizationStatus);

  const playButtonClickHandler = () => {
    const path = `/player/${promo?.id}`;
    navigate(path);
  };

  useEffect(() => {
    dispatch(setFilm(promo));
  }, [promo, dispatch]);


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
                {authtorizationStatus === AuthorizationStatus.Auth ? <MyListButton /> : <MyListButtonNoAuth />}
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
