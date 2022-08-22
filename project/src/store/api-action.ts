import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute, AuthorizationStatus, AppRoute, ERROR_TIMEOUT } from '../const';
import { AuthData } from '../types/auth-data';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { loadPromo, loadFilms, requireAuthorization, setLoadingStatus, loadFilm, loadSimilarFilms, setError } from './action';
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
    const {data} = await api.get<Films>(`${AppRoute.Film}${filmId}`);
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
    const {data} = await api.get<Films[]>(`${AppRoute.Film}${filmId}/similar`);
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
    } catch {
      setError('An error occurred during authorization');
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


