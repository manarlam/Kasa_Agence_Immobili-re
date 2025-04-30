import React from 'react';
import AppRouter from './router/Router';
import './styles/global/global.scss';
import './styles/components/header.scss';
import './styles/components/nav.scss';

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;