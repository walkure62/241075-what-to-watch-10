import { AuthorizationStatus } from '../const';
import {createAction} from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { Reviews } from '../types/reviews';

export const changeGenre = createAction('films/changeGenre', (value) => ({
  payload: value,
}));

export const showMoreFilms = createAction('films/showMoreFilms', (value) => ({
  payload: value,
}));

export const resetFilmsList = createAction('films/resetFilmsList', (value) => ({
  payload: value,
}));

export const setLoadingStatus = createAction<boolean>('data/setDataLoadedStatus');

export const loadFilms = createAction<Films[]>('data/loadFilms');

export const loadPromo = createAction<Films>('data/loadPromo');

export const loadReviews = createAction<Reviews[]>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

