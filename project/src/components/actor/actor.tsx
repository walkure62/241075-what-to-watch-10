function Actor({star}:{star: string}): JSX.Element {
  return (
    <span className="film-card__details-value">{star}</span>
  );
}

export default Actor;
