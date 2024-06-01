import { useAuth } from '../../hooks/useAuth';
import Button from '../Button';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-lightBrown">
      <Link to="/">
        <div>
          <img className="rounded-full max-w-16 min-w-12 max-h-16 min-h-16" src="./images/CozyCorner.png" alt="Logo" />
        </div>
      </Link>
      {user ? (
        <>
          <Button text={'Logout'} onclick={handleLogout} />
        </>
      ) : (
        <>
          <Button text={'Login'} onclick={() => navigate('/login')} />
        </>
      )}
    </div>
  );
};

export default Header;
