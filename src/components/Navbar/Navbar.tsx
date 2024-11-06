import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/signin" className="navbar__link">
        Sign In
      </NavLink>
    </nav>
  );
};

export default Navbar;
