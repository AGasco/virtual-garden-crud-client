import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { TOKEN } from '@/constants';

const Navbar = ({ token }: { token: string }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    navigate('/login');
  };

  const className =
    location.pathname === '/' ? 'navbar navbar--home' : 'navbar navbar--other';

  return (
    <nav className={className}>
      <div className="navbar__content">
        <NavLink to="/" className="navbar__link --home">
          Home
        </NavLink>
        {!token ? (
          <NavLink to="/signin" className="navbar__link">
            Sign In
          </NavLink>
        ) : (
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
