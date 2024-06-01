import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  const onSubmit = async () => {
    await login({ username: 'admin' });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Button text="Login" />
      </form>
    </>
  );
};

export default Login;
