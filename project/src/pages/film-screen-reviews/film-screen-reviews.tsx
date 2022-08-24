import Review from '../../components/review/review';
import { Reviews } from '../../types/reviews';

type FilmScreenProps = {
  reviews: Reviews[] | [];
};

function FilmScreenReviews({ reviews }: FilmScreenProps): JSX.Element {

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
