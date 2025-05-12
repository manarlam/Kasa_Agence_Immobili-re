import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <>
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>      
      <Footer />
    </div>      
    </>
  );
}

export default Layout;