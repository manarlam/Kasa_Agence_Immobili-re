import React from 'react';
import AppRouter from './router/Router';
import './styles/global/global.scss';
import './styles/layout/header.scss';
import './styles/layout/nav.scss';



function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;