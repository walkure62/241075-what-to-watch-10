import { Films } from '../../types/films';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import FormSendComments from '../../components/form-send-comments/form-send-comments';

type AddReviewScreenProps = {
  films: Films[];
  isAuth: boolean;
};

function AddReviewScreen({films, isAuth}: AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Films;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isAuth={isAuth} />

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <FormSendComments />
      </div>
    </section>
  );
}

export default AddReviewScreen;
