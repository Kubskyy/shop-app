import React from 'react';
import styled from 'styled-components';
import { CartItems } from './CartItems';
import { useCart } from './hooks/useCart';

export const Checkout = ({ open, showSidebar }) => {
  const {
    state: { totalPrice, products },
  } = useCart();
  console.log(totalPrice);
  return (
    <Cart open={open}>
      <CartHeader>
        <CartText>Koszyk</CartText>
        <ClosingButton open={open} onClick={showSidebar} />
      </CartHeader>
      <CartItems products={products} />
      <SummaryWrapper>
        <Wrapper>
          <SummaryText>Razem:</SummaryText>
          <Price>{totalPrice} zł</Price>
        </Wrapper>
        <BuyButton type="button">Do kasy</BuyButton>
      </SummaryWrapper>
    </Cart>
  );
};

const SummaryWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SummaryText = styled.h2``;
const Price = styled.p``;
const BuyButton = styled.button`
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #5331f4;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
`;
const CartHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CartText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;
const ClosingButton = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  font-size: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: ${(props) => (props.open ? 'inline-block' : 'none')};
  ::hover {
    border: 1px solid black;
  }
  ::before,
  ::after {
    position: absolute;
    width: 3px;
    height: 25px;
    background-color: black;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: '';
  }
  ::after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`;

const Cart = styled.div`
  position: absolute;
  height: 100vh;
  width: 28rem;
  top: 0;
  padding: 1rem;
  background-color: white;
  right: ${(props) => (props.open ? '0' : '-100%')};
`;
