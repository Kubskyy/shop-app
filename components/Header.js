import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkout } from './Cart/Checkout';
import { Logo } from './Logo';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const showSidebar = () => setOpen(!open);

  return (
    <StyledHeader>
      <Wrapper>
        <StyledNav>
          <Logo />
          <StyledDiv>
            <StyledImg src="/avatar.jpg" alt="avatar" />
            <CartButton onClick={showSidebar}>Koszyk</CartButton>
            <StyledButton type="button">Wyloguj się</StyledButton>
          </StyledDiv>
        </StyledNav>
      </Wrapper>
      <Checkout open={open} showSidebar={showSidebar} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: relative;
  background: white;
`;

const Wrapper = styled.div`
  padding: 0 2rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #d3d3d3;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const StyledImg = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  margin-right: 1rem;
`;
const StyledButton = styled.button`
  margin-left: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #5331f4;
  color: white;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
`;
const CartButton = styled(StyledButton)``;
