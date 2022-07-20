import { Link } from 'react-router-dom';

type FilmCardProps = {
  id: number;
  previewImage: string;
  name: string;
  setActiveFilm: (id: number) => void;
}

function FilmCard({id, previewImage, name, setActiveFilm}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActiveFilm(id)}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} title={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
