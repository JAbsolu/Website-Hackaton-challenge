import './App.css';
import React from 'react';
import Home from './home/home';
import SigninPage from './signin/signin';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';
import {Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
};

export default App;
