import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>FullStack Next.js E-commerce</main>
    {children}
  </>
);

export default Layout;
