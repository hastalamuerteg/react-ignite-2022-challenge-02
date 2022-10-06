import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Success } from '../pages/Success';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
};
