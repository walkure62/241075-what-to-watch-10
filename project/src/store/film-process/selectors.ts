import { NameSpace} from '../../const';
import { State } from '../../types/state';
import { Films } from '../../types/films';
import { Reviews } from '../../types/reviews';

export const getFilm = (state: State): Films | null => state[NameSpace.Film].film;
export const getFilmComments = (state: State): Reviews[] => state[NameSpace.Film].filmComments;
export const getSimilarFilms = (state: State): Films[] => state[NameSpace.Film].similarFilms;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.Film].isDataLoading;
export const getPromoFilm = (state: State): Films | null => state[NameSpace.Film].promoFilm;
export const getFilmID = (state: State): number | undefined => state[NameSpace.Film].film?.id;
export const getFilmStatus = (state: State): boolean | undefined => state[NameSpace.Film].film?.isFavorite;
