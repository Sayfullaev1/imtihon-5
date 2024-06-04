import React, { useEffect, useState } from 'react'
import './Regitor.css'



import logo from "../../photos/logo/twitter-logo-4 1.svg"
import { useNavigate } from 'react-router-dom';




export default function Regestor() {


  const navigate = useNavigate();


  const monthhData=["january","february","march","april","june","july","august","september","october","november","december",];

  const [ dayData , setDayData ] =useState([])

  const [yearData , setYearData ] = useState([])

  useEffect( () => {
    let days = []
    for (let index = 1; index <= 31; index++) {
      days.push(index)
    }
    if (days[days.length-1] === 31) {
      setDayData(days)
    }
  }, [])


  useEffect( () => {
    let years = []
    for (let index = 1900; index <= 2024; index++) {
      years.push(index)
      
    }
    if (years[years.length-1]===2024) {
      setYearData(years)
    }
  }, [])



  const [ nameInput , setNameInput ] = useState("")

  const [ phoneNumberInput , setPhoneNumbertInput ] = useState("")


  const [ monthOption, setMonthOption ] = useState(NaN)

  const [ dayOption, setDayOption ] = useState(NaN)

  const [ yearOption, setYearOption ] = useState(NaN)




  const [ nameValue, setNameValue ] = useState(false)
  const [ phoneNumberValue, setPhoneNumberValue] = useState(false)
  const [ monthValue, setMonthValue ] = useState(false)
  const [ dayValue, setDayValue ] = useState(false)
  const [ yearValue, setYearValue ] = useState(false)



  function clickNext() {
    if (nameInput&& phoneNumberInput && monthOption&& dayOption && yearOption) {
      navigate("/login")
    } 

    if (nameInput === "") {
      setNameValue(true)
    }
    if (phoneNumberInput === "") {
      setPhoneNumberValue(true)
    }
    // if (monthOption === NaN) {
    //   setMonthValue(true)
    // if (dayOption === NaN) {
    //   setDayValue(true)
    // }
    // if (yearOption === NaN) {
    //   setYearValue(true)
    // }
  }





  return (
    <div className='regestor'>

      <div className='regestor_conteiner'>


        <div className='regestor_conteiner_img'>
          <img src={logo} alt="" />
        </div>


        <div className='regestor_conteiner_wrap'>

          <div className='regestor_conteiner_wrap_info'>
            <h1>Create an account</h1>
          </div>

          <div className='regestor_conteiner_wrap_labelWrapper'>

            <label className='regestor_conteiner_wrap_labelWrapper_label'>
              <input 
                onChange={ (e) => setNameValue(false) } 
                onChange={ (e) => setNameInput(e.target.value) } 
                className={`regestor_conteiner_wrap_labelWrapper_label_input ${nameValue ? 'regestor_conteiner_wrap_labelWrapper_label_input_active1' : false ? 'regestor_conteiner_wrap_labelWrapper_label_input_active1' : ''}`}
                type="text" placeholder='Name'/>
            </label>

            <label className='regestor_conteiner_wrap_labelWrapper_label'>
              <input 
                onChange={ (e) => setPhoneNumberValue(false) } 
                onChange={ (e) => setPhoneNumbertInput(e.target.value) } 
                className={`regestor_conteiner_wrap_labelWrapper_label_input ${phoneNumberValue ? 'regestor_conteiner_wrap_labelWrapper_label_input_active2' : false ? 'regestor_conteiner_wrap_labelWrapper_label_input_active2' : ''}`}
                type="text" placeholder='Phone number'/>
            </label>
            
          </div>

          <div className='regestor_conteiner_wrap_wrapperLink'>
            <a className='regestor_conteiner_wrap_wrapperLink_link' href="#">Use email</a>
          </div>

          <div className='regestor_conteiner_wrap_infoWrapper'>

            <h1>Date of birth</h1>

            <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

          </div>

          <div className='regestor_conteiner_wrap_selectWrapper'> 
            <select 
              className='regestor_conteiner_wrap_selectWrapper_select' 
              // className={`regestor_conteiner_wrap_selectWrapper_select ${ monthValue ? 'regestor_conteiner_wrap_selectWrapper_select_value1' : false ? 'regestor_conteiner_wrap_selectWrapper_select_value1' :  }`}
              name="month" 
              onChange={ (e) => setDayValue(false) } 
              onChange={ (e) => setMonthOption(e.target.value) }>
              <option className='regestor_conteiner_wrap_selectWrapper_select_placeholder' value="">Month</option>
              {
                monthhData?.map( (item) => {
                  return(
                    <option key={item} value={item}>{item}</option>
                  )
                })
              }
            </select>
            <select className='regestor_conteiner_wrap_selectWrapper_select' onChange={ (e) => setDayValue(false) } onChange={ (e) => setDayOption(e.target.value)} name="">
              <option className='regestor_conteiner_wrap_selectWrapper_select_placeholder' value="">day</option>
              {
                dayData.map( (item) => {
                  return(
                    <option key={item} value={item}>{item}</option>
                  )
                })
              }
            </select>
            <select className='regestor_conteiner_wrap_selectWrapper_select' onChange={ (e) => setYearOption(false) } onChange={ (e) => setYearOption(e.target.value)} name="">
              <option className='regestor_conteiner_wrap_selectWrapper_select_placeholder' value="">Year</option>
              {
                yearData.map( (item) => {
                  return(
                    <option key={item} value={item}>{item}</option>
                  )
                })
              }
            </select>
          </div>

          <div className='regestor_conteiner_wrap_btnWrapper'>
            <button onClick={ clickNext } className='regestor_conteiner_wrap_btnWrapper_button' type="button">Next</button>
          </div>



        </div>

        
      </div>
      
    </div>
  )
}

