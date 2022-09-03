import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import HistoryRouter from '../history-router';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Logo />
      </HistoryRouter>
    );

    act(() => {
      screen.getByRole('link').click();
    });

    expect(history.location.pathname).toBe('/');

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass(
      'logo__link'
    );
  });
});
