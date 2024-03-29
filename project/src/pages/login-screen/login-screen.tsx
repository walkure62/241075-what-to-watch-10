import { AppRoute, AuthorizationStatus } from '../../const';
import ErrorMessage from '../../components/error-message/error-message';
import { FormEvent, useEffect, useRef } from 'react';
import { fetchFavouriteFilms, loginAction } from '../../store/api-action';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { processErrorHandle } from '../../services/error-handler';
import { getAuthorizationStatus, getError } from '../../store/user-process/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const error = useAppSelector(getError);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      dispatch(fetchFavouriteFilms());
    }
  };

  const setInvalidMessage = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.target.setCustomValidity('The password must consist of at least 2 characters and contain at least 1 letter and 1 digit.');
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
    if (error) {
      processErrorHandle();
    }
  }, [authorizationStatus, error, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {error ? <ErrorMessage /> : null}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={loginRef}
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                pattern="(?=.*[a-z]|[A-Z])(?=.*[0-9]).{2,16}$"
                minLength={2}
                onInvalid = {setInvalidMessage}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginScreen;
