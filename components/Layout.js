import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { useCart } from './Cart/hooks/useCart';

export const Layout = ({ children }) => {
  const {
    state: { isOpen },
  } = useCart();
  return (
    <Wrapper open={isOpen}>
      <Header />
      <HeroWrapper>
        <HeroText>FullStack Next.js E-commerce</HeroText>
        {children}
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  padding: 0 3rem;
  ::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    visibility: visible;
    opacity: ${(props) => (props.open ? '0.5' : '0')};
    transition: opacity 0.2s ease-in;
    z-index:1;
`;

const HeroText = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 2rem;
`;
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;
`;
