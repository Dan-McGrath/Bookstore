import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <div className="grow bg-beige">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
