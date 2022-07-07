import React from 'react';
import styled from 'styled-components';

export const Logo = () => (
  <Wrapper>
    <a href="#">
      <StyledImg
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="logo"
      />
    </a>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
`;

const StyledImg = styled.img`
  height: 2rem;
  width: auto;
`;
