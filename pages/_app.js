import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
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
  }
`;
