import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const login = (data) => {
    userContext.user = { data };
    navigate('/library');
  };

  const logout = () => {
    userContext.user = {};
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user: userContext,
      login,
      logout,
    }),
    [userContext],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
