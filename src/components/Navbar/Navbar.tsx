import { useToken } from '@/hooks';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken } = useToken();

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
  };

  const className =
    location.pathname === '/' ? 'navbar navbar--home' : 'navbar navbar--other';
  const renderSignIn =
    !token && location.pathname !== '/signin' && location.pathname !== '/login';

  return (
    <nav className={className}>
      <div className="navbar__content">
        <NavLink to="/" className="navbar__link --home">
          Home
        </NavLink>
        {renderSignIn && (
          <NavLink to="/signin" className="navbar__link">
            Sign In
          </NavLink>
        )}
        {token && (
          <button
            onClick={handleLogout}
            className="navbar__link navbar__logout"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
