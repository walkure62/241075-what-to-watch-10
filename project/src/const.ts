export enum AppRoute {
  Main = '/',
  Login = '/login',
  Film = '/films/:id',
  MyList = '/mylist',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
}

export const PREVIEW_TIMEOUT = 1000;

export const maxSimilarCard = 4;

export const FILMS_GENRES = [
  'All genres',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thriller',
];

export const INITAL_FILMS_GENRE = 'All genres';

export const CARDS_PER_STEP = 8;
