import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Main from './Main';
import First from './First';
function App() {
  return (
    <>
    <Routes> 
      <Route path='/' element={<Login/>}/>
      <Route path='/first' element={<First/>}/>
      <Route path='/main' element={<Main/>}/>
    
    </Routes> 
    
    </>
  );
}

export default App;
