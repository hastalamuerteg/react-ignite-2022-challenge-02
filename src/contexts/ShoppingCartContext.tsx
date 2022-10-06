import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import {
  addItemToCartAction,
  clearCartAction,
  deleteItemFromCartAction,
  fetchCoffeeListAction,
  removeItemFromCartAction,
} from '../reducers/shoppingCart/actions';
import { cartReducer, ICartState } from '../reducers/shoppingCart/reducer';

interface IShoppingCartProvider {
  children: React.ReactNode;
}

export interface IFormValues {
  zipcode: string;
  street: string;
  number: string;
  additional: string;
  neighboorhood: string;
  city: string;
  state: string;
}

export type PaymentMethods = 'Débito' | 'Cartão de Crédito' | 'Dinheiro';

interface IShoppingCartContextData {
  cart: ICartState;
  paymentMethod: PaymentMethods;
  formValues: IFormValues;
  fetchCoffeeList: () => void;
  addItemToCart: (productId: string) => void;
  removeItemFromCart: (productId: string) => void;
  deleteItemFromCart: (productId: string) => void;
  choosePaymentMethod: (paymentMethod: PaymentMethods) => void;
  updateFormValue: (field: keyof IFormValues, value: string) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContextData>(
  {} as IShoppingCartContextData,
);

const InitialCartStateReducer: ICartState = {
  cart: [],
  coffeeList: [],
  cartTotal: 0,
};

const formInitialValues = {
  zipcode: '',
  street: '',
  number: '',
  additional: '',
  neighboorhood: '',
  city: '',
  state: '',
};

const retrieveLocalStorageCart = () => {
  const storedCart = localStorage.getItem('@coffee-delivery-1.0.0');
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return InitialCartStateReducer;
};

export const ShoppingCartProvider = ({ children }: IShoppingCartProvider) => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    InitialCartStateReducer,
    retrieveLocalStorageCart,
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('Cartão de Crédito');
  const [formValues, setFormValues] = useState<IFormValues>(formInitialValues);

  const fetchCoffeeList = () => dispatch(fetchCoffeeListAction());

  const addItemToCart = (productId: string) => dispatch(addItemToCartAction(productId));

  const removeItemFromCart = (productId: string) =>
    dispatch(removeItemFromCartAction(productId));

  const deleteItemFromCart = (productId: string) =>
    dispatch(deleteItemFromCartAction(productId));

  const choosePaymentMethod = (choosenPaymentMethod: PaymentMethods) =>
    setPaymentMethod(choosenPaymentMethod);

  const updateFormValue = (field: keyof IFormValues, value: string) => {
    setFormValues((state) => {
      return {
        ...state,
        [field]: value,
      };
    });
  };

  const clearCart = () => dispatch(clearCartAction());

  useEffect(() => {
    const cartJSON = JSON.stringify(cart);

    localStorage.setItem('@coffee-delivery-1.0.0', cartJSON);
  }, [cart]);

  const ShoppingCartProviderMemo = useMemo(
    () => ({
      cart,
      paymentMethod,
      formValues,
      fetchCoffeeList,
      addItemToCart,
      removeItemFromCart,
      deleteItemFromCart,
      choosePaymentMethod,
      updateFormValue,
      clearCart,
    }),
    [cart, paymentMethod, formValues],
  );

  return (
    <ShoppingCartContext.Provider value={ShoppingCartProviderMemo}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
