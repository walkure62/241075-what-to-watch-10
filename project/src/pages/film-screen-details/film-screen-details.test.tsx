import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { humanizeFilmDuration} from '../../utils/humanize';
import { makeFakeFilm } from '../../utils/mock';
import FilmScreenDetails from './film-screen-details';

const film = makeFakeFilm();
const mockStore = configureMockStore();
const store = mockStore({
  FILM: {
    promoFilm: [],
    film: film,
    filmComments: [],
    similarFilms: [],
    isDataLoading: false,
  },
});

const storeWithouRunTime = mockStore({
  FILM: {
    promoFilm: [],
    film: { ...film, runTime: undefined },
    filmComments: [],
    similarFilms: [],
    isDataLoading: false,
  },
});

describe('Component: Details', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <FilmScreenDetails />
      </Provider>
    );

    const directorElement = screen.getByText(film.director);
    const runtimeElement = screen.getByText(humanizeFilmDuration(film.runTime));
    const genreElement = screen.getByText(film.genre);
    const releasedElement = screen.getByText(film.released);

    expect(directorElement).toBeInTheDocument();
    expect(runtimeElement).toBeInTheDocument();
    expect(genreElement).toBeInTheDocument();
    expect(releasedElement).toBeInTheDocument();
  });

  it('should render correctly without runtime', () => {
    render(
      <Provider store={storeWithouRunTime}>
        <FilmScreenDetails />
      </Provider>
    );
    const directorElement = screen.getByText(film.director);
    const genreElement = screen.getByText(film.genre);
    const runtimeElement = screen.getByText(/Unknown/i);
    const releasedElement = screen.getByText(film.released);

    expect(directorElement).toBeInTheDocument();
    expect(genreElement).toBeInTheDocument();
    expect(runtimeElement).toBeInTheDocument();
    expect(releasedElement).toBeInTheDocument();
  });
});
