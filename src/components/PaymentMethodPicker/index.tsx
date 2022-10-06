import { BsCurrencyDollar as DollarIcon, BsBank as BankIcon } from 'react-icons/bs';
import { AiOutlineCreditCard as CreditCardIcon } from 'react-icons/ai';
import { FaRegMoneyBillAlt as MoneyIcon } from 'react-icons/fa';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export const PaymentMethodPicker = () => {
  const { paymentMethod, choosePaymentMethod } = useContext(ShoppingCartContext);

  return (
    <div className="h-[207px] bg-slate-300 bg-opacity-20 mt-4 p-10 rounded-lg">
      <div className="flex justify-start items-start leading-4">
        <div className="flex justify-start items-start">
          <DollarIcon size={18} className="text-purple-600 mr-2" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-gray-700 font-medium">Pagamento</h3>
          <p className="text-gray-500 text-sm mt-2">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-10">
        <button
          // eslint-disable-next-line prettier/prettier
          className={`${paymentMethod === 'Cartão de Crédito' ? 'bg-purple-500 border border-purple-500' : ''} flex justify-center items-center py-4 px-1 font-medium text-xs text-gray-600 uppercase outline-1 bg-gray-400 bg-opacity-10 rounded-md`}
          onClick={() => choosePaymentMethod('Cartão de Crédito')}
        >
          <CreditCardIcon size={12} className="text-purple-500 mr-2" />
          Cartão de crédito
        </button>
        <button
          // eslint-disable-next-line prettier/prettier
          className={`${paymentMethod === 'Débito' ? 'bg-purple-500 border border-purple-500' : ''} flex justify-center items-center py-4 px-1 font-medium text-xs text-gray-600 uppercase outline-1 bg-gray-400 bg-opacity-10 rounded-md`}
          onClick={() => choosePaymentMethod('Débito')}
        >
          <BankIcon size={12} className="text-purple-500 mr-2" />
          cartão de débito
        </button>
        <button
          // eslint-disable-next-line prettier/prettier
          className={`${paymentMethod === 'Dinheiro' ? 'bg-purple-500 border border-purple-500' : ''} flex justify-center items-center py-4 px-1 font-medium text-xs text-gray-600 uppercase outline-1 bg-gray-400 bg-opacity-10 rounded-md`}
          onClick={() => choosePaymentMethod('Dinheiro')}
        >
          <MoneyIcon size={12} className="text-purple-500 mr-2" />
          dinheiro
        </button>
      </div>
    </div>
  );
};
