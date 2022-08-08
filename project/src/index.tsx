import App from './components/app/app';
import { FILMS } from './mocks/films';
import {Provider} from 'react-redux';
import { REVIEWS } from './mocks/reviews';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={FILMS} reviews={REVIEWS} isAuth />
    </Provider>
  </React.StrictMode>
);
