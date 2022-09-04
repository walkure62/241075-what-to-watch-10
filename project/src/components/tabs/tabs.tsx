import FilmScreenOverview from '../../pages/film-screen-overview/film-screen-overview';
import FilmScreenDetails from '../../pages/film-screen-details/film-screen-details';
import FilmScreenReviews from '../../pages/film-screen-reviews/film-screen-reviews';
import { Link } from 'react-router-dom';
import { TabsName } from '../../const';
import { useState } from 'react';

function Tabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState(TabsName.OVERVIEW);

  const onTabClickHandler = (evt: React.MouseEvent) => {
    if (evt.currentTarget.textContent !== null) {
      switch(evt.currentTarget.textContent) {
        case TabsName.OVERVIEW:
          setActiveTab(TabsName.OVERVIEW);
          break;
        case TabsName.DETAILS:
          setActiveTab(TabsName.DETAILS);
          break;
        case TabsName.REVIEWS:
          setActiveTab(TabsName.REVIEWS);
          break;
      }
    }
  };

  const renderSwitch = (tab: string) => {
    switch (tab) {
      case TabsName.OVERVIEW:
        return <FilmScreenOverview />;
      case TabsName.DETAILS:
        return <FilmScreenDetails />;
      case TabsName.REVIEWS:
        return <FilmScreenReviews />;
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
            data-testid="Overview"
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
            data-testid="Details"
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
            data-testid="Reviews"
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
