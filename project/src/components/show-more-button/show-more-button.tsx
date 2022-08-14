import { CARDS_PER_STEP } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { showMoreFilms } from '../../store/action';
import { Films } from '../../types/films';

 type ShowMoreButtonProps = {
   films: Films[];
 }

function ShowMoreButton({films}: ShowMoreButtonProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const filmsToShow = useAppSelector((state) => state.renderedFilmCount);

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
