import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export const DefaultLayout = () => {
  return (
    <div className="md:max-w-[1440px] mx-auto px-40">
      <Header />
      <Outlet />
    </div>
  );
};
