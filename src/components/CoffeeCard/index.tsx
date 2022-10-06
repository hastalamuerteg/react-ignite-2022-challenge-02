import { useContext } from 'react';
import { FaShoppingCart as ShoppingCartIcon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { ICoffee } from '../../data/coffeeShopData';

interface ICoffeeCardProps {
  coffee: ICoffee;
}

export const CoffeeCard = ({ coffee }: ICoffeeCardProps) => {
  const { addItemToCart, removeItemFromCart } = useContext(ShoppingCartContext);

  const handleAddItem = (productId: string) => {
    addItemToCart(productId);
  };
  const handleRemoveItem = (productId: string) => {
    removeItemFromCart(productId);
  };

  return (
    <div className="w-64 h-80 bg-gray-500 bg-opacity-10 rounded-tr-3xl rounded-bl-3xl rounded-br-md rounded-tl-md py-4 px-8 flex flex-col justify-center items-center m-4">
      <picture>
        <img className="mx-auto -mt-8" src={coffee.image} alt="" />
      </picture>
      <ul className="flex space-x-1">
        {coffee?.types?.map((type) => (
          <li
            key={`${coffee.id}-${type}`}
            className="text-[10px] my-4 mx-auto font-semibold rounded-full px-2 py-0.5 bg-yellow-300 bg-opacity-20 text-yellow-700 flex justify-center items-center"
          >
            {type}
          </li>
        ))}
      </ul>
      <h3 className="font-semibold font-['Baloo_2'] text-xl">{coffee.name}</h3>
      <p className="text-center text-sm text-gray-700">{coffee.description}</p>
      <div className="flex justify-between items-center mt-auto w-full">
        <div>
          <span className="font-semibold font-['Baloo_2'] text-xl">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(+coffee.price / 100)}
          </span>
        </div>
        <div className="bg-gray-400 bg-opacity-30 w-[72px] h-8 p-2 rounded-md flex justify-between items-center">
          <button
            className="text-lg text-purple-700 flex-grow"
            onClick={() => handleRemoveItem(coffee.id)}
          >
            -
          </button>
          <span className="m-2">{coffee.amount}</span>
          <button
            className="text-lg text-purple-700 flex-grow"
            onClick={() => handleAddItem(coffee.id)}
          >
            +
          </button>
        </div>
        <div>
          <NavLink to="checkout">
            <button className="bg-purple-900 w-8 h-8 p-2 rounded-md text-white">
              <span>
                <ShoppingCartIcon />
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
