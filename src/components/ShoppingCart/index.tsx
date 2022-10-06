import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import emptyCartImg from '../../assets/emptycart.svg';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { ShoppingCartItem } from '../ShoppingCartItem';
import { formatPriceToBRL } from '../../utils/priceFormatter';

export const ShoppingCart = () => {
  const { cart, addItemToCart, removeItemFromCart, deleteItemFromCart, clearCart } =
    useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const deliveryFee = 350;
  const totalPricePerItem = (price: string, amount: number) => +price * amount;

  const handleAddItem = (productId: string) => {
    addItemToCart(productId);
  };

  const handleRemoveItem = (productId: string) => {
    removeItemFromCart(productId);
  };

  const handleDeleteItem = (productId: string) => {
    deleteItemFromCart(productId);
  };

  const handleConfirmPurchase = () => {
    clearCart();
    navigate('/success');
  };

  return (
    <div className="h-[460px] w-10/12 bg-slate-300 bg-opacity-20 mt-4 py-8 px-6 rounded-lg rounded-tr-3xl rounded-bl-3xl">
      {cart?.cart.length ? (
        <div className="flex flex-col justify-start items-start">
          <ul className="flex flex-col h-56 overflow-y-scroll pr-6 space-y-4 w-full">
            {cart?.cart.map((item) => (
              <ShoppingCartItem
                coffee={item}
                key={item.id}
                totalPerItem={formatPriceToBRL(
                  totalPricePerItem(item.price, item.amount),
                )}
                onAddItem={handleAddItem}
                onRemoveITem={handleRemoveItem}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </ul>
          <div className="flex flex-col w-full mt-6 space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-700">Total de itens</p>
              <span>{formatPriceToBRL(cart.cartTotal)}</span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Entrega</p>
              <span>{formatPriceToBRL(deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-lg font-semibold">
              <p>Total</p>
              <span>{formatPriceToBRL(cart.cartTotal + deliveryFee)}</span>
            </div>
          </div>
          <button
            className="flex justify-center items-center w-full my-4 p-3 bg-yellow-600 text-white rounded-md text-sm uppercase font-semibold transition-colors hover:bg-yellow-700"
            onClick={handleConfirmPurchase}
          >
            confirmar pedido
          </button>
        </div>
      ) : (
        <div className="flex justify-around items-center flex-col h-full">
          <img src={emptyCartImg} alt="" className="w-52 h-52" />
          <NavLink to="/">
            <button className="flex justify-center items-center p-4 bg-yellow-300 bg-opacity-40 text-yellow-700 rounded-xl transition-colors hover:bg-yellow-200">
              Começar minhas compras
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};
