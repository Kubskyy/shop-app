import React from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';

export function Products() {
  const { data: products, isSuccess, isLoading } = useProducts();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Wrapper>
      {isSuccess && !products.length && <p>There are no products</p>}
      {isSuccess && (
        <>
          {products.map(({ id, name, imageUrl, price, imageAlt }) => (
            <ProductCard
              key={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
              imageAlt={imageAlt}
            />
          ))}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
