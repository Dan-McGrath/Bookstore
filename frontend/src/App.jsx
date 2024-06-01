import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import DashBoard from './pages/dashboard/DashBoard';
import Auth from './store/auth/Auth';
import Login from './store/auth/Login';
import { AuthProvider } from './hooks/useAuth';
import SideNav from './components/Layout/SideNav';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
        <Route path="/library" element={<Auth />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<DashBoard />} />
            <Route element={<SideNav />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
