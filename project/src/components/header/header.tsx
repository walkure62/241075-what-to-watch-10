import { AuthorizationStatus } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { getAuthorizationStatus, getUserAvatar } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-action';
import Logo from '../logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import MyListTitle from '../my-list-title/my-list-title';
import { useAppDispatch, useAppSelector } from '../../hooks';

type HeaderProps = {
  isInMyList?: boolean;
  isBreadcrumbs?: boolean;
}

function Header({ isInMyList, isBreadcrumbs}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userAvatar = useAppSelector(getUserAvatar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onAvatarClickkHandler = () => {
    const path = '/mylist';
    navigate(path);
  };

  const renderMyListHeader = isInMyList ? <MyListTitle /> : null;
  const renderBreadcrumbs = isBreadcrumbs ? <Breadcrumbs /> : null;


  return (
    <header className={isInMyList ? 'user-page__head page-header' : 'page-header'}>
      <Logo />
      {renderBreadcrumbs}
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar" onClick={onAvatarClickkHandler}>
              <img
                src={userAvatar}
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          {renderMyListHeader}
          <li className="user-block__item">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to="#"
              className="user-block__link"
            >
              Sign out
            </Link>
          </li>
        </ul>
      ) : (
        <div className="user-block">
          <Link to="/login" title="/login" className="user-block__link">
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
