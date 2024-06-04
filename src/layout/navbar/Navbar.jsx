import React from 'react'
import './Navbar.css'


import suchen from '../../photos/instuments/search.svg'
import einstellungen from '../../photos/instuments/settings.svg'


import {navbarMenuData} from "./NavbarMenuData/NavbarMenuData"


export default function Navbar() {
  return (
    <div className='layout'>



      <div className='layout_container'>


        <div className='layout_container_wrap'>


          <div className='layout_container_wrap_inputWrapper'>
            <span className='layout_container_wrap_inputWrapper_img'>
              <img src={suchen} alt="" />
            </span>
            <input className='layout_container_wrap_inputWrapper_input' type="text" placeholder='Search Twitter'/>
          </div>


          <div className='layout_container_wrap_menuWrapper'>

            <div className='layout_container_wrap_menuWrapper_info'>
              <h1>Trends for you</h1>
              <img src={einstellungen} alt="" />
            </div>

            <div className='layout_container_wrap_menuWrapper_info'>
              <ul className='layout_container_wrap_menuWrapper_card_info'>
                {
                  navbarMenuData.map( (item) => {
                    return(
                      <li className='layout_container_wrap_menuWrapper_card_info_item'>
                        <div className='layout_container_wrap_menuWrapper_card_info_item_wrap'>
                          <p>{item.Name}</p>
                          <img src={item.img} alt="" />
                        </div>
                        <h1 className='layout_container_wrap_menuWrapper_card_info_item_wrap_h1'>{item.text}</h1>
                        <p className='layout_container_wrap_menuWrapper_card_info_item_wrap_p'>{item.info}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className='layout_container_wrap_menuWrapper_linkWrapper'>
              <a className='layout_container_wrap_menuWrapper_linkWrapper_link' href="#">Show more</a>
            </div>

          </div>


          

        </div>

        <div className='layout_container_peopleWrapper'>

          <div className='layout_container_peopleWrapper_info'>
            <h1 className='layout_container_peopleWrapper_info_h1'></h1>
          </div>

          <div className='layout_container_peopleWrapper_div'>
                <div className='layout_container_peopleWrapper_div_img'>
                  <img src="https://s3-alpha-sig.figma.com/img/f06b/2a37/195919eda9f0e4c6af8c8e8292c3c2b9?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olL-E9tPRoNbPYu7PL1yVQcPeykg5Hv4FwB775sFMMOH0CnQXZhAmK35TAtOqmPqj8IhoTAl18ZfVNKUCWj80DRq1u3rPetNPsSvukEbtGgngFchvONAP9wmHBRdgTkCzlOmzGhOkkBnlHg~WIobt7HuKL1NNrVUtAueQWrWH2xP9VaahYU3LX3SE8OHuy2yymv6aybXOBbuYok87SyV~aoapKFYCvybcq8Zrb9a48f9oZWn5akNi5nH6HbQ1RzctJBOv1~ofbWoWIov-blFmq2WFQ5MuFawuq57WI7MDPLtiB7fAtcavhQwzk-I~l7Bk9NTgWHrqJ9r4NLm5GYNYw__" alt="" />
                </div>
                <div className='layout_container_peopleWrapper_div_info'>
                  <h1>Mushtariy</h1>
                  <p>@Mushtar565266</p>
                </div>
                <div className='layout_container_peopleWrapper_div_btn'>
                  <button className='layout_container_peopleWrapper_div_btn_button'>Follow</button>
                </div>
          </div>

          <div className='layout_container_peopleWrapper_div'>
                <div className='layout_container_peopleWrapper_div_img'>
                  <img src="https://s3-alpha-sig.figma.com/img/178a/89ef/801f8582955545c08f5181c2051a05d4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cIArnga9gcrj3MLa4~3mE0aUbBKgo81KWi89P--gNd8CXZvKDl0-PycfCusO-bBlpHJecNRR4asjdJuAzcgL7DRa6-ZRshhuPA~n07fbxyvE4FXjSkgwil31TKJzN6viH1UiZQChJmBcXJIOrteD93UwLhqDLqkOK6G8Obw9eKlW4XW01jFxgiyROncUwmIYgzKHBG-rOIlTT3GZ-wMtHDL03LOXxSlg8CBnxTwscDOoSMDVpyKC6k0EmGOVGAEFss2wYLHdIuCch7wkwBJpEyfE4antpNWjAeGZ8w-WUp21Z921bKErGwF2mUxJLbJ1kStKzavYyOtUzYEGnTFT5Q__" alt="" />
                </div>
                <div className='layout_container_peopleWrapper_div_info'>
                  <h1>Mushtariy</h1>
                  <p>@Mushtar565266</p>
                </div>
                <div className='layout_container_peopleWrapper_div_btn'>
                  <button className='layout_container_peopleWrapper_div_btn_button'>Follow</button>
                </div>
          </div>

          <div className='layout_container_peopleWrapper_linkWrapper'>
            <a className='layout_container_peopleWrapper_link_wrapper_link' href="">Show more</a>
          </div>

        </div>


        <div className='layout_container_info'>
          <p>Terms of Service <span className='layout_container_info_span'>Privacy Policy</span> Cookie Policy</p>
          <p>Imprint Ads Info More ···  © 2021 Twitter, Inc.</p>
        </div>


      </div>



    </div>
  )
}
