import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

import './DashBoardLayout.css'


export default function DashBoardLayout() {
  return (
    <div className='container'>

        <Header/>

            <Outlet/>

        <Navbar/>
      
    </div>
  )
}
