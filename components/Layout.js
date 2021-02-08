import React, { Fragment } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Fragment>{children}</Fragment>
    </>
  );
};

export default Layout;
