import App from './components/app/app';
import { checkAuthAction, fetchFilmsAction, fetchPromoAction } from './store/api-action';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchPromoAction());
store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <App />
    </Provider>
  </React.StrictMode>,
);
