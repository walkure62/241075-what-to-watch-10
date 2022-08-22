import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import FilmScreen from '../../pages/film-screen/film-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const {authorizationStatus, isLoading } = useAppSelector((state) => state);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen authorizationStatus= {authorizationStatus === AuthorizationStatus.Auth} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Film} element={<FilmScreen authorizationStatus={authorizationStatus === AuthorizationStatus.Auth} />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListScreen isAuth={authorizationStatus === AuthorizationStatus.Auth} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReviewScreen isAuth={authorizationStatus === AuthorizationStatus.Auth} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
