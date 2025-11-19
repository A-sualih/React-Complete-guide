import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initAOS } from './aosInit';
import './index.css';

initAOS();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
