import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../utils/mock';
import Actor from './actor';

const film = makeFakeFilm();

describe('Component: Details star', () => {
  it('should render correctly', () => {
    render(<Actor star={film.starring[0]} />);

    const textElement = screen.getByText(film.starring[0]);
    expect(textElement).toBeInTheDocument();
  });
});
