import './App.css';
import React from 'react';
import Home from './home/home';
import Signin from './signin/signin';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home/>}>
    //       <Route path='/signin'>{<Signin/>}</Route>
    //       <Route path='/signup'>{<SignUp/>}</Route>
    //       <Route path='/dashboard'>{<Dashboard/>}</Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  )
};

export default App;
