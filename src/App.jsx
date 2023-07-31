import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hire from './components/Hire';
import Footer from './components/Footer';
import './styles/style.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Box bgColor={'#F4F2DE'}>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Hire />
        <Footer />
        <Toaster />
      </Box>
    </Router>
  );
}

export default App;
