import { CARDS_PER_STEP } from '../../const';
import { Films } from '../../types/films';
import { getRenderedFilmCount } from '../../store/genre-process/selectors';
import { showMoreFilms } from '../../store/genre-process/genre-process';
import { useAppDispatch, useAppSelector } from '../../hooks';

 type ShowMoreButtonProps = {
   films: Films[];
 }

function ShowMoreButton({films}: ShowMoreButtonProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const filmsToShow = useAppSelector(getRenderedFilmCount);

  const onShowMoreButtonClickHandler = () => {
    dispatch(showMoreFilms(filmsToShow + CARDS_PER_STEP));
  };

  if (filmsToShow < films.length) {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onShowMoreButtonClickHandler}>Show more</button>
      </div>
    );
  }
  return null;
}

export default ShowMoreButton;
