import { fetchFilmComments } from '../../store/api-action';
import { getFilmComments } from '../../store/film-process/selectors';
import Review from '../../components/review/review';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

function FilmScreenReviews(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getFilmComments);

  const reviewsList =
      reviews.map((review) => (
        <Review key={review.id} review={review} />
      ));

  useEffect(() => {
    dispatch(fetchFilmComments(params?.id));
  }, [params?.id, dispatch]);


  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsList}
      </div>
    </div>
  );
}

export default FilmScreenReviews;
