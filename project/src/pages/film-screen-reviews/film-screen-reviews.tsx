import { Films } from '../../types/films';
import Review from '../../components/review/review';
import { useAppSelector } from '../../hooks';

type FilmScreenProps = {
  film: Films;
};

function FilmScreenReviews({ film }: FilmScreenProps): JSX.Element {

  const reviews = useAppSelector((state) => state.reviews).filter((review) => review.id === film.id);

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
