import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { AppRoute } from '../../const';
import FilmScreen from '../../pages/film-screen/film-screen';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes } from 'react-router-dom';
import ServerErrorScreen from '../../pages/server-error-screen/server-error-screen';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element=
          {
            <MainScreen />
          }
      />
      <Route
        path={AppRoute.Login}
        element={<LoginScreen />}
      />
      <Route
        path={AppRoute.MyList}
        element=
          {
            <PrivateRoute authorizationStatus={authStatus}>
              <MyListScreen />
            </PrivateRoute>
          }
      />
      <Route path={AppRoute.Film} element={<FilmScreen />} />
      <Route path={AppRoute.Player} element={<PlayerScreen />}>
        <Route path=":id" element={<PlayerScreen />} />
      </Route>
      <Route
        path={AppRoute.AddReview}
        element=
          {
            <PrivateRoute authorizationStatus={authStatus}>
              <AddReviewScreen />
            </PrivateRoute>
          }
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundScreen />}
      />
      <Route
        path={AppRoute.ServerError}
        element={<ServerErrorScreen />}
      />
    </Routes>
  );
}

export default App;
