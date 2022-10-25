import { createContext, useMemo, useReducer } from 'react';
import { cartReducer } from './reducers/CartReducers';

export const CartContext = createContext();

const initialState = { products: [], totalPrice: 0, isOpen: false };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
