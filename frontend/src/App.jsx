import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
      </Route>
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
