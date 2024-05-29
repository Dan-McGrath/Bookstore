import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

const userInfo = { firstName: 'Dan', LastName: 'McGrath' };

const Login = () => {
  const { login } = useAuth;
  const onSubmit = () => {
    login(userInfo);
  };

  return <Button text="Login" onclick={onSubmit} />;
};

export default Login;
