/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Layout>dupaaa</Layout>
    </div>
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
