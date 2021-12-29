import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ResultsContextProvider } from './Context/ResultsContextProvider'


ReactDOM.render(<ResultsContextProvider><BrowserRouter><App /></BrowserRouter></ResultsContextProvider>, document.getElementById('root'));