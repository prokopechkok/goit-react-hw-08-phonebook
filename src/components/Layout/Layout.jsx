import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppNav, Loader } from 'components';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <AppNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
