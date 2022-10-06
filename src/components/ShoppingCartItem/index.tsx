import { BiTrash as TrashIcon } from 'react-icons/bi';
import { ICoffee } from '../../data/coffeeShopData';

interface IShoppingCartItemProps {
  coffee: ICoffee;
  totalPerItem: string;
  onRemoveITem: (coffeeId: string) => void;
  onAddItem: (coffeeId: string) => void;
  onDeleteItem: (coffeeId: string) => void;
}
export const ShoppingCartItem = ({
  coffee,
  totalPerItem,
  onRemoveITem,
  onAddItem,
  onDeleteItem,
}: IShoppingCartItemProps) => {
  return (
    <li key={coffee.id} className="flex items-start leading-4 border-b py-6">
      <div>
        <img src={coffee.image} alt={coffee.name} className="mr-4 w-16 h-16" />
      </div>
      <div className="flex-grow flex flex-col">
        <p className="text-gray-700">{coffee.name}</p>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-400 bg-opacity-30 mt-2 w-[72px] h-8 p-2 rounded-md flex justify-between items-center">
            <button
              className="text-lg text-purple-700 flex-grow"
              onClick={() => onRemoveITem(coffee.id)}
            >
              -
            </button>
            <span className="m-2">{coffee.amount}</span>
            <button
              className="text-lg text-purple-700 flex-grow"
              onClick={() => onAddItem(coffee.id)}
            >
              +
            </button>
          </div>
          <button
            className="bg-gray-400 bg-opacity-30 mt-2 h-8 p-2 rounded-md flex justify-between items-center font-medium text-xs text-gray-600 uppercase"
            onClick={() => onDeleteItem(coffee.id)}
          >
            <TrashIcon size={14} className="text-purple-500 mr-2" />
            remover
          </button>
        </div>
      </div>
      <div>
        <span className="text-gray-700 font-semibold">{totalPerItem}</span>
      </div>
    </li>
  );
};
