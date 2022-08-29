import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { addReviewData, Reviews, errorReviewData } from '../types/reviews.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { setFilm } from './action';
import { saveToken, dropToken } from '../services/token';
import { UserData } from '../types/user-data';
import { FavoriteData } from '../types/favourite-data.js';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchFavouriteFilms = createAsyncThunk<Films[] | [], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films[] | []>(APIRoute.Favourite);
    return data;
  },
);

export const changeFavouriteFilmStatus = createAsyncThunk<Films, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/changeStatus',
  async ({filmId, filmStatus}, {dispatch, extra: api}) => {
    const { data } = await api.post<Films>(`${APIRoute.Favourite}/${filmId}/${Number(!filmStatus)}`);
    dispatch(setFilm(data));
    return data;
  },
);

export const fetchFilmsAction = createAsyncThunk<Films[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilms',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Films[]>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<Films, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchFilm',
  async (filmId, {extra: api }) => {
    const { data } = await api.get<Films>(`${APIRoute.Films}/${filmId}`);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<Films[], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchSimilarFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Films[]>(`${AppRoute.FilmPage}${filmId}/similar`);
    const filteredData = data.filter((film) => film.id !== Number(filmId));
    return filteredData;
  },
);

export const fetchFilmComments = createAsyncThunk<Reviews[] | [], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchFilmComments',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Reviews[]>(`${APIRoute.Reviews}/${filmId}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<errorReviewData, [(string | undefined), addReviewData], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'addReview/addReview',
  async ([filmID, {comment , rating}], { extra: api }) => {
    const { data } = await api.post<errorReviewData>(`${APIRoute.Reviews}/${filmID}`, {comment, rating});
    return data;
  },
  );
