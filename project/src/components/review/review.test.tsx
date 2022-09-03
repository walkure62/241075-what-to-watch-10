import { render, screen } from '@testing-library/react';
import { makeFakeFilmComment } from '../../utils/mock';
import Review from './review';
import { humanizedDate } from '../../utils/humanize';

const comment = makeFakeFilmComment();

describe('Component: Review card', () => {
  const dateText = humanizedDate(comment.date);
  it('should render correctly', () => {
    render(<Review review={comment} />);

    const reviewTextElement = screen.getByText(comment.comment);
    const reviewAuthorElement = screen.getByText(comment.user.name);
    const reviewDateElement = screen.getByText(dateText);
    const reviewRatingElement = screen.getByText(comment.rating.toFixed(1));

    expect(reviewTextElement).toBeInTheDocument();
    expect(reviewAuthorElement).toBeInTheDocument();
    expect(reviewDateElement).toBeInTheDocument();
    expect(reviewRatingElement).toBeInTheDocument();
  });
});
