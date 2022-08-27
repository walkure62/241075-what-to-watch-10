import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute, AuthorizationStatus, AppRoute, ERROR_TIMEOUT } from '../const';
import { AuthData } from '../types/auth-data';
import { addReviewData, Reviews } from '../types/reviews.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { loadPromo, loadFilms, requireAuthorization, setLoadingStatus, loadFilm, loadSimilarFilms, setError, loadReviews } from './action';
import { saveToken, dropToken } from '../services/token';
import { store } from './';
import { UserData } from '../types/user-data';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Films[]>(APIRoute.Films);
  dispatch(loadFilms(data));
  dispatch(setLoadingStatus(false));
});

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Promo);
    dispatch(loadPromo(data));
    dispatch(setLoadingStatus(true));
  },
);

export const fetchFilm = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${AppRoute.FilmPage}${filmId}`);
    dispatch(loadFilm(data));
    dispatch(setLoadingStatus(true));
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Films[]>(`${AppRoute.FilmPage}${filmId}/similar`);
    const filteredData = data.filter((film) => film.id !== Number(filmId));
    dispatch(loadSimilarFilms(filteredData));
  },
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      setError(error);
    }
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk(
  'user/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT,
    );
  },
);

export const fetchReviews = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews[]>(`${APIRoute.Reviews}/${filmId}`);
    dispatch(loadReviews(data));
  },
);

export const addReviewAction = createAsyncThunk<void, [(string | undefined),addReviewData], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ([filmID, {comment , rating}], {dispatch, extra: api}) => {
    try {
      await api.post<Reviews>(`${APIRoute.Reviews}/${filmID}`, {comment, rating});
    } catch (error){
      setError(error);
    }
  },
  );


