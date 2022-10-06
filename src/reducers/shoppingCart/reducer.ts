import { ICoffee, coffees } from '../../data/coffeeShopData';
import { CartStateActions } from './actions';

interface ICartActions {
  type: CartStateActions;
  payload?: any;
}

export interface ICartState {
  cart: ICoffee[];
  cartTotal: number;
  coffeeList: ICoffee[];
}

export const cartReducer = (state: ICartState, action: ICartActions) => {
  switch (action.type) {
    case CartStateActions.fetch_coffee_list:
      return {
        ...state,
        coffeeList: coffees,
      };

    case CartStateActions.add_product: {
      const newCoffeeList = state.coffeeList.map((coffee) => {
        if (coffee.id === action.payload.productId && coffee.stock > coffee.amount) {
          return { ...coffee, amount: coffee.amount + 1 };
        }
        return coffee;
      });

      const newCart = newCoffeeList.filter((c) => c.amount > 0);
      const newCartTotal = newCart.reduce(
        (prev, cur) => prev + cur.amount * +cur.price,
        0,
      );

      return {
        ...state,
        coffeeList: newCoffeeList,
        cart: newCart,
        cartTotal: newCartTotal,
      };
    }

    case CartStateActions.remove_product: {
      const newCoffeeList = state.coffeeList.map((coffee) => {
        if (coffee.id === action.payload.productId && coffee.amount > 0) {
          return { ...coffee, amount: coffee.amount - 1 };
        }
        return coffee;
      });

      const newCart = newCoffeeList.filter((c) => c.amount > 0);
      const newCartTotal = newCart.reduce(
        (prev, cur) => prev + cur.amount * +cur.price,
        0,
      );

      return {
        ...state,
        coffeeList: newCoffeeList,
        cart: newCart,
        cartTotal: newCartTotal,
      };
    }

    case CartStateActions.delete_product: {
      const newCoffeeList = state.coffeeList.map((coffee) => {
        if (coffee.id === action.payload.productId) {
          return { ...coffee, amount: 0 };
        }
        return coffee;
      });

      const newCart = state.cart.filter((item) => item.id !== action.payload.productId);
      const newCartTotal = newCart.reduce(
        (prev, cur) => prev + cur.amount * +cur.price,
        0,
      );

      return {
        ...state,
        coffeeList: newCoffeeList,
        cart: newCart,
        cartTotal: newCartTotal,
      };
    }

    case CartStateActions.clear_cart: {
      return {
        ...state,
        cart: [],
        cartTotal: 0,
      };
    }

    default:
      return state;
  }
};
