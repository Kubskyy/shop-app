import React from 'react';
import styled from 'styled-components';

const ProductCard = () => (
  <Wrapper>
    <ImgWrapper>
      <Img src="/scissors.jpg" alt="Nozyczki" />
    </ImgWrapper>
    <InfoWrapper>
      <ProductName>Nożyczki</ProductName>
      <ProductPrice>21.37 zł</ProductPrice>
    </InfoWrapper>
    <BuyButton type="button">Kup</BuyButton>
    <CartButton type="button">Dodaj do koszyka</CartButton>
  </Wrapper>
);

export default ProductCard;

const Wrapper = styled.article`
  max-width: 350px;
  display: flex;
  flex-direction: column;
`;
const ImgWrapper = styled.div`
  width: 100%;
  min-height: 250px;
  overflow: hidden;
  border-radius: 10px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 0.85rem;
`;

const ProductPrice = styled.p`
  font-weight: 700;
`;

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

const CartButton = styled(BuyButton)`
  color: black;
  background-color: #ededed;
`;
