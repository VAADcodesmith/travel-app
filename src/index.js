import React from 'react';
import { createRoot, render } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';

const root = createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  );