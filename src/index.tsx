import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/Navbar';
import Conteudo from './components/Conteudo';
import { Box } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import Astronautas from './components/Astronautas';
import Footer from './components/FooterNasa';
import Highlander from './components/FooterNasa';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <>
    <NavBar></NavBar>
    <Conteudo></Conteudo>
    <Astronautas></Astronautas>
    <Highlander></Highlander>
    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
