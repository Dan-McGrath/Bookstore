import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
const Auth = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  return authContext.isAuthorized ? (
    <>
      <Outlet />
    </>
  ) : (
    navigate('/login')
  );
};

export default Auth;
