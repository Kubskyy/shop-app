import React from 'react';
import styled from 'styled-components';
import { CartItem } from './CartItem';

export const CartItems = ({ products }) => (
  <StyledItems>
    {products.map((product, index) => (
      <CartItem key={index} {...product} />
    ))}
  </StyledItems>
);

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
`;
