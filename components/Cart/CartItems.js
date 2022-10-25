import React from 'react';
import styled from 'styled-components';
import { CartItem } from './CartItem';

export const CartItems = ({ products }) => (
  <StyledItems>
    {products.map((product) => (
      <CartItem key={product.id} {...product} />
    ))}
  </StyledItems>
);

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
`;
