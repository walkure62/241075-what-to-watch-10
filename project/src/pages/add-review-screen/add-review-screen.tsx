import Header from '../../components/header/header';
import FormSendComments from '../../components/form-send-comments/form-send-comments';
import { useAppSelector } from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const film = useAppSelector((state) => state.film);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film?.backgroundImage}
            alt={film?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film?.posterImage}
            alt={film?.name}
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
