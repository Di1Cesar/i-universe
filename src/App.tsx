import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import ListDividers from './components/Navbar';
import DenseAppBar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Conteudo from './components/Conteudo';
import Astronautas from './components/Astronautas';
function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Conteudo></Conteudo>
      <Astronautas></Astronautas>
    </ChakraProvider>
  );
}

export default App;
