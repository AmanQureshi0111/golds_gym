import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' for React 18+
import App from './App'; // Make sure App.js exists in the same directory

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
