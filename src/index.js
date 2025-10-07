import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' for React 18+
import App from './App'; // Make sure App.js exists in the same directory
import { BrowserRouter }  from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
