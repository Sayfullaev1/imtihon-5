import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import DashBoardLayout from './layout/dashBoardLayout/DashBoardLayout';



import Registor from "./pages/regestor/Regestor";
import Login from "./pages/login/Login";


import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>


      <Routes>


        <Route element={<Registor/>} path='/registor'/>

        <Route element={<Login/>} path='/login'/>


        <Route element={<DashBoardLayout/>}>

          <Route element={<Home/>} path='/'/>
          <Route element={<Profile/>} path='/profile'></Route>

        </Route>



      </Routes>
    
    
    
    </BrowserRouter>


  </React.StrictMode>
);

