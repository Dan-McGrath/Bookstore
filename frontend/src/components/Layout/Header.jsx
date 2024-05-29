import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

const Header = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    authContext.isAuthorized = false;
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-lightBrown">
      <div>
        <img className="rounded-full max-w-16 min-w-12 max-h-16 min-h-16" src="./images/CozyCorner.png" alt="Logo" />
      </div>
      {authContext.isAuthorized ? (
        <>
          <Button text={'Logout'} onclick={logout} />
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
