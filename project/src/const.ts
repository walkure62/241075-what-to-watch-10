enum AppRoute {
  Main = '/',
  Login = '/login',
  Filmslist = '/films',
  Film = '/films/:id',
  FilmPage = '/films/',
  MyList = '/mylist',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  ServerError = '/servererror',
  NotFound = '*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favourite = '/favorite',
}

enum NameSpace {
  User = 'USER',
  Films = 'FILMS',
  Film = 'FILM',
  Genre = 'GENRE',
  AddReview = 'ADD_REVIEW',
  Favourite = 'FAVOURITE',
}

enum TabsName {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

const INITAL_FILMS_GENRE = 'All genres';

const CARDS_PER_STEP = 8;

const MAX_GENRES_TABS = 9;

const MAX_ACTORS_IN_OVERVIEW = 4;

const PREVIEW_TIMEOUT = 1000;

const ERROR_TIMEOUT = 2000;

const MAX_SIMILAR_CARDS = 4;

const TEST_INDEX = 5;

export {AppRoute, APIRoute, AuthorizationStatus, NameSpace,
  INITAL_FILMS_GENRE, MAX_SIMILAR_CARDS, MAX_GENRES_TABS, MAX_ACTORS_IN_OVERVIEW,
  CARDS_PER_STEP, PREVIEW_TIMEOUT, ERROR_TIMEOUT, TabsName, TEST_INDEX};
