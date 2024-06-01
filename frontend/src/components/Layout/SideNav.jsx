import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const SideNav = () => {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <div className="grid grid-cols-12 gap-1 grow">
        <div className="col-start-2">SideNav</div>
        <div className="col-span-4 col-start-6 bg-beige">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SideNav;
