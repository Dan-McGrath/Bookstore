import SideNav from '../../components/Layout/SideNav';
import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const Auth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <SideNav />
    </>
  );
};

export default Auth;
