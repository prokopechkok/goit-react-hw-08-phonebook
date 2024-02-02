import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppNav, Loader } from 'components';

const Layout = () => {
  return (
    <div>
      <AppNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
