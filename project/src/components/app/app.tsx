import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Films } from '../../types/films';
import FilmScreen from '../../pages/film-screen/film-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Reviews } from '../../types/reviews';

type AppScreenProps = {
  films: Films[];
  reviews: Reviews[];
  isAuth: boolean;
};

function App({films, reviews, isAuth}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen reviews={reviews} isAuth= {isAuth} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Film} element={<FilmScreen films={films} reviews={reviews} isAuth={isAuth} />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen films={films} isAuth={isAuth} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReviewScreen films={films} isAuth={isAuth} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen films={films} />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
