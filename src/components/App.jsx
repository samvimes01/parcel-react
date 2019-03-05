import React from 'react';
import { hot } from 'react-hot-loader';

import logo from '../img/logo.svg';
import '../styles/App.css';

const App = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
       [awesome] react app
      </p>
    </header>
    <main className="app-main">
      place app here
    </main>
  </div>
);

export default hot(module)(App);
