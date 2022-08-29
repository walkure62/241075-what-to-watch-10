import { NameSpace} from '../../const';
import { State } from '../../types/state';

export const getFavoriteFilms = (state: State) => state[NameSpace.Favourite].favoriteFilms;
export const getLoadingStatus = (state: State) => state[NameSpace.Favourite].isDataLoading;
export const getFavoriteFilmsLength = (state: State) => state[NameSpace.Favourite].favoriteFilms.length;
