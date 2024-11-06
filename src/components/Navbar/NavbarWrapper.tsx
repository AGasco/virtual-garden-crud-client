import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarWrapper = ({ token }: { token: string }) => {
  return (
    <>
      <Navbar token={token} />
      <Outlet />
    </>
  );
};

export default NavbarWrapper;
