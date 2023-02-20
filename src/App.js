import './App.css';
import React from 'react';
import Home from './home/home';
import SigninPage from './signin/signin';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';
import {Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/signin" element={<Signin />} />
    //   <Route path="/signup" element={<SignUp />} />
    // </Routes>  
    <div>
      <Home/>
    </div>
  )
};

export default App;
