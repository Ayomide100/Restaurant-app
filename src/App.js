import React, {Component} from 'react';
import './Bootstrap.min.css';
import './App.css';
import './fontawesome.min.css'
import MainComponent from './components/MainComponent.js';
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MainComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
