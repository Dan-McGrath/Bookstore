import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { AuthContext } from '../AuthContext';
import Button from '../../components/Button';

const Login = () => {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const login = () => {
    userContext.firstName = 'Dan';
    userContext.lastName = 'McGrath';
    authContext.isAuthorized = true;
    navigate('/library');
  };
  return <Button text="Login" onclick={login} />;
};

export default Login;
