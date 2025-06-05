// components/Layout.jsx
import React from 'react';
import '../style/Layout.css';
import Navbar from './Navbar';
import FooterContent from "./FooterContent";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header flex-center">
        <Navbar/>
      </header>
      

      <main className="main flex-center">
        <div className='main-content width-sizing'>
          {children}
        </div> 
      </main>


      <footer className='footer flex-center'>
        <FooterContent prop1="HALLO" csWidth={500} />
      </footer>
    </div>
  );
};

export default Layout;
