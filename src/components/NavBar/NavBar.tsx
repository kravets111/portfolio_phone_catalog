import { getActiveClass } from '../../utils/getActiveClass';
import './NavBar.scss';

import { NavLink } from 'react-router-dom';

const linkClass = getActiveClass('nav__link text__body--uppercase');

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" end className={linkClass} aria-label="Home">
            home
          </NavLink>
        </li>

        <li className="nav__list-item">
          <NavLink to="/phones" className={linkClass} aria-label="Phones">
            phones
          </NavLink>
        </li>

        <li className="nav__list-item">
          <NavLink to="/tablets" className={linkClass} aria-label="Tablets">
            tablets
          </NavLink>
        </li>

        <li className="nav__list-item">
          <NavLink
            to="/accessories"
            className={linkClass}
            aria-label="Accessories"
          >
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
