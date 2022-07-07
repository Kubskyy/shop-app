import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

export const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <HeroWrapper>
      <HeroText>FullStack Next.js E-commerce</HeroText>
    </HeroWrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  padding: 0 3rem;
`;

const HeroText = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -2px;
`;
const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;
`;
