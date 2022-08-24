import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, resetFilmsList, showMoreFilms, loadFilms, setLoadingStatus, requireAuthorization, loadPromo, loadReviews, loadFilm, loadSimilarFilms, setError } from './action';
import { INITAL_FILMS_GENRE, CARDS_PER_STEP, AuthorizationStatus } from '../const';
import { Films } from '../types/films';
import { Reviews } from '../types/reviews';

type InitialState = {
  genre: string;
  films: Films[],
  promo: Films | null,
  reviews: Reviews[] | [],
  renderedFilmCount: number,
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus,
  film: Films | null,
  similarFilms: Films[],
  error: string | null | unknown,
}

const initialState: InitialState = {
  genre: INITAL_FILMS_GENRE,
  films: [],
  promo: null,
  reviews: [],
  renderedFilmCount: CARDS_PER_STEP,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  film: null,
  similarFilms: [],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.renderedFilmCount = CARDS_PER_STEP;
    })
    .addCase(showMoreFilms, (state, action) => {
      state.renderedFilmCount = action.payload;
    })
    .addCase(resetFilmsList, (state, action) => {
      state.renderedFilmCount = action.payload.cardsToShow;
      state.genre = action.payload.genre;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
