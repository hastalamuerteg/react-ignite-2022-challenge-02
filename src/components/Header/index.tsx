import { useContext } from 'react';
import {
  FaShoppingCart as ShoppingCartIcon,
  FaMapMarkerAlt as MapPinIcon,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export const Header = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <header className="flex justify-between items-center py-8">
      <NavLink to="/">
        <picture className="flex justify-center items-center">
          <img className="w-32 h-12" src={logo} alt="rocket with todo written on it" />
        </picture>
      </NavLink>
      <div className="flex justify-center items-center space-x-4">
        <span className="bg-purple-500 bg-opacity-20 p-2 rounded-lg h-9 flex justify-center items-center text-purple-700 font-medium">
          <MapPinIcon className="mr-1" /> São Paulo, SP
        </span>
        <NavLink to="checkout" className="relative">
          <span className="bg-yellow-500 bg-opacity-40 p-2 rounded-lg h-9 flex justify-center items-center text-yellow-700">
            <ShoppingCartIcon />
          </span>
          {cart?.cart?.length ? (
            <span className="absolute -top-2 -right-3 z-20 w-5 h-5 rounded-full bg-yellow-700 text-white flex justify-center items-center text-xs font-semibold">
              {cart.cart.length}
            </span>
          ) : null}
        </NavLink>
      </div>
    </header>
  );
};
