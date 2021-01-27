// main library
import React from 'react';
// rendering in the browser
import ReactDOM from 'react-dom';
import './index.css';
// main component App.js
import App from './App';
import reportWebVitals from './reportWebVitals';

// React DOM.render(what you wanna render, where you want to render it)-> id root on index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
