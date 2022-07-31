import React from 'react';
import { useAuth } from './useAuth';

export const SignInButton = () => {
  const { signIn } = useAuth();
  const handleSignIn = () =>
    signIn('google', { callbackUrl: 'http://localhost:3000/' });

  return (
    <button type="button" onClick={handleSignIn}>
      Zaloguj się
    </button>
  );
};
