import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '../components/Cart/context/CartContext';

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </CartProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'IBM Plex Sans', sans-serif;
    overflow-x:hidden;
  }
  a {
  color: inherit;
  text-decoration: none;
}
`;
