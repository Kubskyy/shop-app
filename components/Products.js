import React from 'react';
import { useProducts } from '../hooks/useProducts';

export function Products() {
  const { products, isSuccess, isLoading } = useProducts();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {isSuccess && !products.length && <p>There are no products</p>}
      {isSuccess && (
        <div>
          {/* {products.map(({name, image_url, description})=>
                <ProductCard name=name imageUrl=image_url description=description />
            )} */}
        </div>
      )}
    </div>
  );
}
