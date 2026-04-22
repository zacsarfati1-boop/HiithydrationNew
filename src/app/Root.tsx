import { Outlet, useMatch } from 'react-router';
import { Header } from './components/Header';

export function Root() {
  const isMentoringApp = useMatch('/');

  if (isMentoringApp) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
    </div>
  );
}