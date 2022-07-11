import React from 'react';
import styled from 'styled-components';

export const Checkout = ({ open, showSidebar }) => (
  <Cart open={open}>
    <ClosingButton open={open} onClick={showSidebar} />
  </Cart>
);

const ClosingButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 50px;
  height: 50px;
  font-size: 0;
  background-color: transparent;
  border: none;
  display: ${(props) => (props.open ? 'inline-block' : 'none')};
  ::hover {
    border: 1px solid black;
  }
  ::before,
  ::after {
    position: absolute;
    top: 50%;
    left: 50%;
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
  width: 25rem;
  top: 0;
  background-color: white;
  right: ${(props) => (props.open ? '0' : '-100%')};
`;
