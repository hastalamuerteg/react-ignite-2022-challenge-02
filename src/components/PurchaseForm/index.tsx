import { useContext } from 'react';
import { RiMapPinLine as MapPinIcon } from 'react-icons/ri';
import { IFormValues, ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export const PurchaseForm = () => {
  const { formValues, updateFormValue } = useContext(ShoppingCartContext);

  const handleUpdateFormValue = (field: keyof IFormValues, value: string) => {
    updateFormValue(field, value);
  };

  return (
    <div className="h-[380px] bg-slate-300 bg-opacity-20 mt-4 p-10 rounded-lg">
      <div className="flex justify-start items-start leading-4">
        <div className="flex justify-start items-start">
          <MapPinIcon
            size={18}
            className="text-yellow-600 mr-2 border-b border-yellow-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-gray-700 font-medium">Endereço de Entrega</h3>
          <p className="text-gray-500 text-sm mt-2">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <form className="grid grid-cols-12 gap-4 mt-8">
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-5"
          type="text"
          name="zipcode"
          id="zipcode"
          placeholder="CEP"
          value={formValues.zipcode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('zipcode', e.target.value)
          }
        />
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-12"
          type="text"
          name="street"
          id="street"
          placeholder="Rua"
          value={formValues.street}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('street', e.target.value)
          }
        />
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-5"
          type="text"
          name="number"
          id="number"
          placeholder="Número"
          value={formValues.number}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('number', e.target.value)
          }
        />
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-7"
          type="text"
          name="additional"
          id="additional"
          placeholder="Complemento"
          value={formValues.additional}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('additional', e.target.value)
          }
        />
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-5"
          type="text"
          name="neighboorhood"
          id="neighboorhood"
          placeholder="Bairro"
          value={formValues.neighboorhood}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('neighboorhood', e.target.value)
          }
        />
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-5"
          type="text"
          name="city"
          id="city"
          placeholder="Cidade"
          value={formValues.city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('city', e.target.value)
          }
        />
        <input
          className="p-3 font-medium text-sm outline-1 outline-zinc-400 flex items-center bg-gray-300 bg-opacity-20 rounded-md border border-gray-300 col-span-2"
          type="text"
          name="state"
          id="state"
          placeholder="UF"
          value={formValues.state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateFormValue('state', e.target.value)
          }
        />
      </form>
    </div>
  );
};
