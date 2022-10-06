import { RiMapPinLine as MapPinIcon, RiTimerFill as TimerIcon } from 'react-icons/ri';
import { BsCurrencyDollar as DollarIcon } from 'react-icons/bs';
import { useContext } from 'react';
import successImg from '../../assets/success.svg';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export const Success = () => {
  const { formValues, paymentMethod } = useContext(ShoppingCartContext);
  const { street, number, state, city, neighboorhood } = formValues;

  return (
    <>
      <div>
        <h1 className="font-semibold font-['Baloo_2'] text-3xl text-yellow-600 mt-20">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-lg text-gray-600">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <section className="grid grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-start p-4">
          <div className="h-72 space-y-8 p-0.5 rounded-md rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-[#DBAC2C] to-[#8047F8]">
            <div className="flex flex-col space-y-8 p-10 rounded-md rounded-tr-3xl rounded-bl-3xl bg-white h-full">
              <div className="flex justify-start leading-4">
                <span className="w-8 h-8 flex justify-center items-center mr-2 p-2 rounded-full bg-purple-500 text-white">
                  <MapPinIcon size={18} className="text-white" />
                </span>
                <div className="text-zinc-600 leading-5">
                  <p>
                    Entrega em <strong>{`Rua ${street}, ${number}`}</strong>
                  </p>
                  <p>{`${neighboorhood} - ${city}, ${state}`}</p>
                </div>
              </div>
              <div className="flex justify-start leading-4">
                <span className="w-8 h-8 flex justify-center items-center mr-2 p-2 rounded-full bg-yellow-500 text-white">
                  <TimerIcon size={18} className="text-white" />
                </span>
                <div className="text-zinc-600 leading-5">
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </div>
              <div className="flex justify-start leading-4">
                <span className="w-8 h-8 flex justify-center items-center mr-2 p-2 rounded-full bg-orange-500 text-white">
                  <DollarIcon size={18} className="text-white" />
                </span>
                <div className="text-zinc-600 leading-5">
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>{paymentMethod}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <picture className="p-4">
          <img src={successImg} alt="" />
        </picture>
      </section>
    </>
  );
};
