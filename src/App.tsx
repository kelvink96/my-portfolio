import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {MantineProvider} from "@mantine/core";
import { LandingPage } from './pages';

function App() {
  return (
    <div className="App">
      <MantineProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;
