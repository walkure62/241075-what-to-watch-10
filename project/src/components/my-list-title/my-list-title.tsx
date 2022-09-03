import { useAppSelector } from '../../hooks';
import { getFavoriteFilmsLength } from '../../store/favourite-process/selectors';

function MyListTitle(): JSX.Element {
  const favoriteFilmsLenght = useAppSelector(getFavoriteFilmsLength);

  return (
    <h1 className="page-title user-page__title">
      My list{' '}
      <span className="user-page__film-count">{favoriteFilmsLenght}</span>
    </h1>
  );
}

export default MyListTitle;
