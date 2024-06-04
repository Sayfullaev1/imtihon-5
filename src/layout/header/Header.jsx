import React from 'react'
import './Header.css'

import logo from '../../photos/logo/twitter-logo-4 1.svg'

import {HeaderMenuData} from "./headerMenuData/HeaderMenuData"
import { Link } from 'react-router-dom'





export default function Header() {


  return (
    <div className='header'>



      <div className='header_container'>


        <div className='header_container_img'>
          <img src={logo} alt="" />
        </div>


        <div className='header_container_wrap'>
          <ul className='header_container_wrap_list'>
            {
              HeaderMenuData.map( (item) => {
                if (item.activMenuLogo) {
                  return(
                    <li className='header_container_wrap_list_item' key={item.Name}>
                      <Link className='header_container_wrap_list_item_link' to={item.LinK}>
                        <div className='header_container_wrap_list_item_link_divWrapper'>
                          <img src={item.inaktivMenuLogo} alt="" />
                          <h1>{item.Name}</h1>
                        </div>
                      </Link>
                    </li>
                  )
                } else{
                  return(
                    <li className='header_container_wrap_list_item' key={item.Name}>
                      <Link className='header_container_wrap_list_item_link'>
                        <div className='header_container_wrap_list_item_link_divWrapper'>
                          <img src={item.inaktivMenuLogo} alt="" />
                          <h1>{item.Name}</h1>
                        </div>
                        
                      </Link>
                    </li>
                  )
                }
                
              })
            }
          </ul>
        </div>


        <div className='header_container_btnWrapper'>

          <button className='header_container_btnWrapper_button'>Tweet</button>

        </div>


      </div>



    </div>
  )
}
