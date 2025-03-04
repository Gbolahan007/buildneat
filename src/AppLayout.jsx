import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header';
const Footer = lazy(() => import('./Footer'));

function AppLayout() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <div>
        <Header />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>

      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}

export default AppLayout;
