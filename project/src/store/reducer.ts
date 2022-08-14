import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, resetFilmsList, showMoreFilms } from './action';
import { INITAL_FILMS_GENRE, CARDS_PER_STEP } from '../const';
import { FILMS } from '../mocks/films';

const initialState = {
  genre: INITAL_FILMS_GENRE,
  films: FILMS,
  renderedFilmCount: CARDS_PER_STEP,
  cardsToShow: [],
  favouriteFilms: FILMS.filter((film) => film.isFavorite).length,

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
    });
});

export {reducer};
