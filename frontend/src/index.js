import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit'

//COMPONENTS
import App from './App';
import mainReducers from './redux/reducers/mainReducers';

//STYLES
import './styles/index.css';

const reduxStore = createStore({reducer: mainReducers}) // crea dentro de la variable con el metodo create store un sotre que tiene un objeto que contiene dentro nuestro reducerMain
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
