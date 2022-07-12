import { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('Not in CountProvider scope');
  }
  return useMemo(() => context, [context]);
};
