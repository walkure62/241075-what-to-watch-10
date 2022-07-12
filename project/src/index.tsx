import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const dataFilms = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title = {dataFilms.title}
      genre = {dataFilms.genre}
      date = {dataFilms.date}
    />
  </React.StrictMode>,
);
