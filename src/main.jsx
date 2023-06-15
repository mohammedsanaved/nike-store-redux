import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './app/Store.js';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <Toaster position='top-center' reverse-Order={false} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
