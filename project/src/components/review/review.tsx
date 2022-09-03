import { Reviews } from '../../types/reviews';
import { dateValue, humanizedDate } from '../../utils/humanize';


type FilmScreenProps = {
  review: Reviews;
};

function Review({ review }: FilmScreenProps): JSX.Element {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={dateValue(review.date)}>
            {humanizedDate(review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
