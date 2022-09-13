import React from 'react';
import styled from 'styled-components';
import { useAuth } from './useAuth';

export const SignInButton = () => {
  const { signIn } = useAuth();
  const handleSignIn = () =>
    signIn('google', { callbackUrl: 'http://localhost:3000/' });

  return (
    <StyledSignInButton type="button" onClick={handleSignIn}>
      Zaloguj się
    </StyledSignInButton>
  );
};

const StyledSignInButton = styled.button`
  display: inline-flex;
  width: 10rem;
  margin: 0 auto;
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
