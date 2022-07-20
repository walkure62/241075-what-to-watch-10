import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

type HeaderProps = {
  isAuth: boolean;
}

function Header({isAuth}: HeaderProps): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo />
      {isAuth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="#" className="user-block__link">Sign out</Link>
          </li>
        </ul> :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}

export default Header;
