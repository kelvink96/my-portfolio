import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {MantineProvider} from "@mantine/core";
import {AboutPage, ContactPage, LandingPage, PortfolioPage} from './pages';

function App() {
  return (
    <div className="App">
      <MantineProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;
