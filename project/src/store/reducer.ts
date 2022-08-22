import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, resetFilmsList, showMoreFilms, loadFilms, setLoadingStatus, requireAuthorization, loadPromo, loadReviews } from './action';
import { INITAL_FILMS_GENRE, CARDS_PER_STEP, AuthorizationStatus } from '../const';
import { Films } from '../types/films';
import { Reviews } from '../types/reviews';

type InitialState = {
  genre: string;
  films: Films[],
  promo: Films | null,
  reviews: Reviews[],
  renderedFilmCount: number,
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  genre: INITAL_FILMS_GENRE,
  films: [],
  promo: null,
  reviews: [],
  renderedFilmCount: CARDS_PER_STEP,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});

export {reducer};
