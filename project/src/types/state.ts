import { AuthorizationStatus } from '../const';
import { Films } from './films.js';
import { store } from '../store/index.js';
import { Reviews } from '../types/reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
  error: boolean | null | unknown;
  userAvatar: string;
};

export type FilmsProcess = {
  films: Films[] | [];
  isDataLoading: boolean;
};

export type FilmProcess = {
  promoFilm: Films | null;
  film: Films | null;
  filmComments: Reviews[] | [];
  similarFilms: Films[] | [];
  isDataLoading: boolean;
};

export type GenreProcess = {
  genre: string;
  renderedFilmCount: number;
};

export type AddReviewProcess = {
  isDataLoading: boolean;
  reviewSubmited: boolean;
};

export type FavoriteFilmsProcess = {
  favoriteFilms: Films[] | [];
  isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
