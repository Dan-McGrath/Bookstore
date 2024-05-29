import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const { user } = useAuth();

  return !user ? <Navigate to="/login" /> : children;
};

export default Auth;
