import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { TOKEN } from '@/constants';

const Navbar = ({ token }: { token: string }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__link">
        Home
      </NavLink>
      {!token ? (
        <NavLink to="/signin" className="navbar__link">
          Sign In
        </NavLink>
      ) : (
        <button onClick={handleLogout} className="navbar__link navbar__logout">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
