import { Films } from '../../types/films';
import FilmScreenOverview from '../../pages/film-screen-overview/film-screen-overview';
import FilmScreenDetails from '../../pages/film-screen-details/film-screen-details';
import FilmScreenReviews from '../../pages/film-screen-reviews/film-screen-reviews';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reviews } from '../../types/reviews';

type TabsProps = {
  film: Films;
  reviews: Reviews[];
};

function Tabs({ film, reviews }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const onTabClickHandler = (evt: React.MouseEvent) => {
    if (evt.currentTarget.textContent !== null) {
      setActiveTab(evt.currentTarget.textContent);
    }
  };

  const renderSwitch = (tab: string) => {
    switch (tab) {
      case 'Overview':
        return <FilmScreenOverview film={film} />;
      case 'Details':
        return <FilmScreenDetails film={film} />;
      case 'Reviews':
        return <FilmScreenReviews film={film} reviews={reviews} />;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={
              activeTab === 'Overview'
                ? 'film-nav__item film-nav__item--active'
                : 'film-nav__item'
            }
          >
            <Link
              className="film-nav__link"
              onClick={onTabClickHandler}
              to={''}
            >
              Overview
            </Link>
          </li>
          <li
            className={
              activeTab === 'Details'
                ? 'film-nav__item film-nav__item--active'
                : 'film-nav__item'
            }
          >
            <Link
              className="film-nav__link"
              onClick={onTabClickHandler}
              to={''}
            >
              Details
            </Link>
          </li>
          <li
            className={
              activeTab === 'Reviews'
                ? 'film-nav__item film-nav__item--active'
                : 'film-nav__item'
            }
          >
            <Link
              className="film-nav__link"
              onClick={onTabClickHandler}
              to={''}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      {renderSwitch(activeTab)}
    </>
  );
}

export default Tabs;
