import { FaShoppingCart as ShoppingCartIcon } from 'react-icons/fa';
import { RiTimerFill as TimerIcon } from 'react-icons/ri';
import {
  GiCardboardBoxClosed as CardboardBoxIcon,
  GiCoffeeCup as CoffeeIcon,
} from 'react-icons/gi';

import { useContext, useEffect } from 'react';
import coffeeImg from '../../assets/coffee.svg';
import { CoffeeCard } from '../../components/CoffeeCard';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export const Home = () => {
  const { cart, fetchCoffeeList } = useContext(ShoppingCartContext);

  const fetchInitialData = () => {
    if (fetchCoffeeList) fetchCoffeeList();
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <main>
      <section className="flex justify-between items-center h-96 mt-10">
        <div className="flex flex-col justify-start">
          <h1 className="font-semibold font-['Baloo_2'] text-4xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-20">
            <div className="flex justify-start items-center">
              <span className="w-8 h-8 flex justify-center items-center p-2 rounded-full mr-2 bg-orange-500 text-white">
                <ShoppingCartIcon />
              </span>
              <p className="text-sm">Compra simples e segura</p>
            </div>
            <div className="flex justify-start items-center">
              <span className="w-8 h-8 flex justify-center items-center p-2 rounded-full mr-2 bg-stone-500 text-white">
                <CardboardBoxIcon />
              </span>
              <p className="text-sm">Embalagem mantém o café intacto</p>
            </div>
            <div className="flex justify-start items-center">
              <span className="w-8 h-8 flex justify-center items-center p-2 rounded-full mr-2 bg-yellow-500 text-white">
                <TimerIcon />
              </span>
              <p className="text-sm">Entrega rápida e rastreada</p>
            </div>
            <div className="flex justify-start items-center">
              <span className="w-8 h-8 flex justify-center items-center p-2 rounded-full mr-2 bg-purple-500 text-white">
                <CoffeeIcon />
              </span>
              <p className="text-sm">O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <picture>
          <img src={coffeeImg} alt="" />
        </picture>
      </section>
      <h2 className="font-semibold font-['Baloo_2'] text-xl">Nossos cafés</h2>
      <section className="mt-10 flex flex-wrap">
        {cart?.coffeeList?.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </section>
    </main>
  );
};
