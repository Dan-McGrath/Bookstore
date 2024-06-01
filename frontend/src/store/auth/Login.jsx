import { useState } from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    // Temo set up until backend is done
    if (username === 'user' && password === 'password') {
      await login({ username });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <div className="flex w-full h-full m-0">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 p-4 m-auto border-2 border-darkBrown rounded-2xl min-w-36 min-h-36 max-h-64 max-w-64"
        >
          <div className="flex flex-col gap-3 grow">
            <label htmlFor="username" className="sr-only">
              Username:
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="px-2 rounded-2xl text-darkBrown"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password" className="sr-only">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="px-2 rounded-2xl text-darkBrown"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button text="Login" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
