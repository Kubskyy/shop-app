import { useQuery } from 'react-query';
import { supabase } from '../utils/supabaseClient';

const fetchProducts = async () => {
  const { data: products, error } = await supabase.from('products').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return products;
};

export function useProducts() {
  return useQuery('products', () => fetchProducts());
}
