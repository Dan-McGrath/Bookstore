import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import DashBoard from './pages/dashboard/DashBoard';
import Auth from './store/auth/Auth';
import Login from './store/auth/Login';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="library" element={<Auth />}>
          <Route index element={<DashBoard />} />
        </Route>
      </Route>
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
