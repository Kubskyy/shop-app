import React from 'react';
import styled from 'styled-components';
import { useCart } from './hooks/useCart';

export const CartItem = (product) => {
  const { name, imageUrl, price, imageAlt } = product;
  const { dispatch } = useCart();
  // eslint-disable-next-line no-shadow
  const handleDelete = (product) => {
    dispatch({ type: 'deleteProduct', payload: product });
  };
  return (
    <StyledItem>
      <ImgWrapper>
        <StyledImg src={imageUrl} alt={imageAlt} />
      </ImgWrapper>
      <StyledContent>
        <StyledInfo>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </StyledInfo>
        <ButtonWrapper>
          <StyledDeleteButton onClick={() => handleDelete(product)}>
            Usuń
          </StyledDeleteButton>
        </ButtonWrapper>
      </StyledContent>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  border-bottom: 1px solid lightgray;
`;
const ImgWrapper = styled.div`
  width: 125px;
  height: clamp(125px, 7vw, 150px);
  overflow: hidden;
  border-radius: 5px;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const Name = styled.p`
  font-weight: 700;
`;

const Price = styled(Name)``;

const StyledDeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: #5331f4;
  cursor: pointer;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
