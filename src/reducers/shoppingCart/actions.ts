export enum CartStateActions {
  fetch_coffee_list = 'fetch_coffee_list',
  add_product = 'add_product',
  remove_product = 'remove_product',
  delete_product = 'delete_product',
  clear_cart = 'clear_cart',
}

export const fetchCoffeeListAction = () => {
  return {
    type: CartStateActions.fetch_coffee_list,
  };
};

export const addItemToCartAction = (productId: string) => {
  return {
    type: CartStateActions.add_product,
    payload: { productId },
  };
};

export const removeItemFromCartAction = (productId: string) => {
  return {
    type: CartStateActions.remove_product,
    payload: { productId },
  };
};

export const deleteItemFromCartAction = (productId: string) => {
  return {
    type: CartStateActions.delete_product,
    payload: { productId },
  };
};

export const clearCartAction = () => {
  return {
    type: CartStateActions.clear_cart,
  };
};
