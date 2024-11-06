import { useToken } from '@/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const { token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/plants');
  }, [token, navigate]);

  return (
    <>
      <div className="home">
        <h2>Welcome to your</h2>
        <h1>VIRTUAL GARDEN</h1>
      </div>
    </>
  );
};

export default Home;
