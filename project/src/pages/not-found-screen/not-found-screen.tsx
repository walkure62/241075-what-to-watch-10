import {Link} from 'react-router-dom';

const divStyle = {
  display: 'grid',
  width: '100vw',
  height: '100vh',
  backgroundImage: 'linear-gradient(-180deg,#180202 0%,#000 100%)',
  gridTemplateRows: '1fr 1fr',
  gridTemplateColumns: '1fr',
  justifyItems: 'center',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  alignSelf: 'start',
  color: '#d9cd8d',
  fontFamily: '"Arial Black",sans-serif',
  fontSize: '25px',
};

function NotFoundScreen(): JSX.Element {
  return (
    <div
      className="not-found"
      style={divStyle}
    >
      <img
        src="img/404-not-found.png"
        alt="404: Page not found"
        width="250"
        height="250"
      >
      </img>
      <Link to="/" className="main__link" style={linkStyle}>
        <p>Вернуться на главную страницу</p>
      </Link>
    </div>
  );
}

export default NotFoundScreen;
