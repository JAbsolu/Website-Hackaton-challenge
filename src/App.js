import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Signin from './signin/signin';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
  )
};

export default App;
