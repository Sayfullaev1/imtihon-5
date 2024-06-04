import React, { useState } from 'react'
import './Login.css'

import logo from '../../photos/logo/twitter-logo-4 1.svg'
import { Link, useNavigate } from 'react-router-dom'





export default function Login() {

    const navigate = useNavigate();



    const [ phoneNumber , setPhoneNumber ] = useState("")

    const [ Password , setPassword ] = useState("")



    function clickLogIn(){
        if (phoneNumber==="test" && Password==="test") {
            navigate("/")
        }
    }




  return (
    <div className='login'>
      
        <div className='login_conteiner'>


            <div className='login_conteiner_img'>
                <img src={logo} alt="" />
            </div>


            <div className='login_conteiner_wrap'>

                <div className='login_conteiner_wrap_info'>
                    <h1>Log in to Twitter</h1>
                </div>

                <div className='login_conteiner_wrap_labelWrapper'>

                    <label className='login_conteiner_wrap_labelWrapper_label'>
                      <input
                        onChange={ (e) => setPhoneNumber(e.target.value) } 
                        className='login_conteiner_wrap_labelWrapper_label_input'
                        type="text" placeholder='Phone number, email address'/>
                    </label>

                    <label className='login_conteiner_wrap_labelWrapper_label'>
                      <input 
                        onChange={ (e) => setPassword(e.target.value) }     
                        className='login_conteiner_wrap_labelWrapper_label_input'
                        type="text" placeholder='Password'/>
                    </label>

                </div>


                <div className='login_conteiner_wrap_btnWrapper'>
                  <button onClick={clickLogIn} className='login_conteiner_wrap_btnWrapper_button' type="button">Log In</button>
                </div>

                <div className='login_conteiner_wrap_linksWrapper'>
                    <Link className='login_conteiner_wrap_linksWrapper_link'>Forgot password?</Link>
                    <Link className='login_conteiner_wrap_linksWrapper_link' to='/registor'>Sign up to Twitter</Link>
                </div>

            </div>

        
        </div>

    </div>
  )
}
