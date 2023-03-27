import React from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

interface Props {
  children: React.ReactNode | JSX.Element;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
