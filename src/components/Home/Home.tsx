import { Navbar } from '@/components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = ({ token }: { token: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/plants');
  }, [token, navigate]);

  return (
    <>
      <Navbar token={token} />
      <div className="home">
        <h2>Welcome to your</h2>
        <h1>VIRTUAL GARDEN</h1>
      </div>
    </>
  );
};

export default Home;
