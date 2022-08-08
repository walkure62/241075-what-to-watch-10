import { useAppDispatch, useAppSelector } from '../../hooks';
import { FILMS_GENRES } from '../../const';
import GenresItem from '../genres-item/genres-item';
import { changeGenre } from '../../store/action';

function GenresList(): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const onTabClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.textContent;
    dispatch(changeGenre(clickedGenre));
  };

  const generateGenreTab = FILMS_GENRES?.map((genre) => (
    <GenresItem
      key={genre}
      genre={genre}
      isActive={selectedGenre === genre}
      onClick={onTabClickHandler}
    />
  ));

  return <ul className="catalog__genres-list">{generateGenreTab}</ul>;
}

export default GenresList;
