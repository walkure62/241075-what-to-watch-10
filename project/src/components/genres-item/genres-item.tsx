import { Link } from 'react-router-dom';

type GenresItemProps = {
  genre: string;
  isActive: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

function GenresItem({genre, isActive, onClick}: GenresItemProps): JSX.Element {
  return (
    <li
      className={
        isActive
          ? 'catalog__genres-item catalog__genres-item--active'
          : 'catalog__genres-item'
      }
      onClick={onClick}
    >
      <Link to="" className="catalog__genres-link">
        {genre}
      </Link>
    </li>
  );
}

export default GenresItem;
