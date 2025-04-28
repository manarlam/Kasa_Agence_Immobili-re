import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

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