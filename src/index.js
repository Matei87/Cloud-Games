import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import GamesState from './context/GamesState';


ReactDOM.render(
  <GamesState>
    <Router>
      <App />
    </Router>
  </GamesState>,
  document.getElementById('root')
);
reportWebVitals();
