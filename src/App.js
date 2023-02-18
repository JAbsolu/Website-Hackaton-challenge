import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Signin from './signin/signin';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/'" element={<Home />}></Route>
      <Route path="'/dashboard/dashboard'" element={<Dashboard />}></Route>
      <Route path="/signin/signin" element={<Signin />}></Route>
      <Route path="/signup/signup" element={<SignUp />}></Route>
    </Routes>  )
};

export default App;
