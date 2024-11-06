import { Navbar } from '@/components';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <h2>Welcome to your</h2>
        <h1>VIRTUAL GARDEN</h1>
      </div>
    </>
  );
};

export default Home;
