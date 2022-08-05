import { Films } from '../../types/films';
import { Reviews } from '../../types/reviews';
import Review from '../../components/review/review';

type FilmScreenProps = {
  film: Films;
  reviews: Reviews[];
};

function FilmScreenReviews({ film, reviews }: FilmScreenProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews?.map((review) => (
          <Review key={String(review.id)} review={review}/>
        ))}
      </div>
    </div>
  );
}

export default FilmScreenReviews;
