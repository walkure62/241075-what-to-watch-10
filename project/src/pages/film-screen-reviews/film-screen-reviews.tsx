import Review from '../../components/review/review';
import { useAppSelector } from '../../hooks';

function FilmScreenReviews(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  const reviewsList = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsList}
      </div>
    </div>
  );
}

export default FilmScreenReviews;
