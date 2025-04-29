import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';
import Header from '../components/header/Header';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;