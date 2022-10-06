import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { AppRoutes } from './navigation/routes';

export const App = () => {
  return (
    <ShoppingCartProvider>
      <AppRoutes />
    </ShoppingCartProvider>
  );
};
