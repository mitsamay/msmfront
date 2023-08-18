import BottomNav from '../components/BottomNav';
import NavBar from '../components/NavBar';
import Login from '../components/user/Login';

const Home = () => {
  return (
    <div style={{ width: '100%', height: '80%' }}>
      <Login />
      <NavBar />
      <BottomNav />
    </div>
    
  );
};

export default Home;
