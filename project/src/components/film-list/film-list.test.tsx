import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  AuthorizationStatus,
  CARDS_PER_STEP,
  INITAL_FILMS_GENRE,
  TEST_INDEX,
} from '../../const';
import { makeFakeFilm } from '../../utils/mock';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import FilmList from './films-list';
import HistoryRouter from '../history-router';
import { createMemoryHistory } from 'history';

const films = Array.from({length: 10}, () => makeFakeFilm());
const history = createMemoryHistory();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  FILMS: { films: films, isDataLoading: false },
  FILM: {
    promoFilm: films[TEST_INDEX],
    film: films[TEST_INDEX],
    filmComments: [],
    similarFilms: [],
    isDataLoading: false,
  },
  GENRE: { genre: INITAL_FILMS_GENRE, renderedFilmCount: CARDS_PER_STEP },
  USER: { authorizationStatus: AuthorizationStatus.NoAuth, error: null },
  ADD_REVIEW: { isDataLoading: false, reviewSubmited: false },
  FAVORITE: { favoriteFilms: films, isDataLoading: false },
});

describe('Component: Film list', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmList films={films} />
        </HistoryRouter>
        ,
      </Provider>
    );

    const textElement = screen.getByTestId(/catalog__films-list/i);
    expect(textElement).toBeInTheDocument();
    const headerElement = screen.getByText(films[TEST_INDEX].name);
    expect(headerElement).toBeInTheDocument();
  });
});
