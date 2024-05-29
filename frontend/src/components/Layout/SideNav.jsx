import React from 'react';
import { Outlet } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
      <div>Sidenav</div>
      <Outlet />
    </>
  );
};

export default SideNav;
