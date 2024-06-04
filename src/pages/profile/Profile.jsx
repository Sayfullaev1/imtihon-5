import React from 'react'

import './Profile.css'


import comment from '../../photos/functionalInstrumets/comment.svg'
import retweet from '../../photos/functionalInstrumets/retweet.svg'
import like from '../../photos/functionalInstrumets/like.svg'
import share from '../../photos/functionalInstrumets/share.svg'
import statistics from '../../photos/functionalInstrumets/statistics.svg'


import Frame1 from '../../photos/functionalInstrumets/Frame (2).svg'
import Frame2 from '../../photos/functionalInstrumets/Frame (3).svg'
import Frame3 from '../../photos/functionalInstrumets/Vector.svg'
import Frame4 from '../../photos/functionalInstrumets/Frame (4).svg'


import ellipse from "../../photos/instuments/Vector.png"



export default function Profile() {
  return (
    <div className='profile'>
      


      <div className='profile_container'>


          <nav className='profile_container_navbar'>

            <div className='profile_container_navbar_img'>
              <img src="https://s3-alpha-sig.figma.com/img/360a/0674/0a6c06cd4d87ab21bc539604ccc0fde2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TitjJ6lyhovFKj4zwAPrJtuALvNTgxgWY6RJ6Cqt-qAuMOBQAz5DK0crVgBiPTqyACPfbxowBwLiHkXq3~vPYV3fEGf86kTGWLlZoQGbY3thhRgqjBwZoXD2nTXajq4CeDwU0X9vUGBGMpDV~V7CjcPJ30AbvdHIQ4BAACkEiP16aMvPlG5tT-gxWljbUK83731k4t4fM3TlgSBSSxHRnG3-tgCKV6VlKpvOsluiG2oxNkja5B4f1PjSau-ozYQILx9yExbQl3ZIWXSBUMt87m50af-PMbOco-gmzYvXn2m1Wj1Jkoftplc4TfesS-ucxbbbvBaKTrg3og7Ut-R0BA__" alt="" />
            </div>

            <div className='profile_container_navbar_info'>
              
              <div className='profile_container_navbar_info_wrap'>
                <div className='profile_container_navbar_info_wrap_img'>
                  <img src="https://s3-alpha-sig.figma.com/img/81d2/ed4a/6fa4b20a69987ae2b4ea2ed92fd045a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHhz4t73gAZrJlaZ~VzUPRnJvqPruYjRcvQmvRi3GuUHinVOifu2UgUPZIzNnaa~KQX6SIexDdog6foM5jp6uwCRm82MyTwmaSfoaZwHuttlFTclGyNDra6B8KgPkdheqejvMIBb~zZOt4Ov~w0vYL2O6JbDLVKfSz2j0TSLdGTL2s8cSlovLYzzXpKnxkyjJBE-4RS54Gq1R7VzN5zz6X6fBapMUpH6YwymmRs-qeCBd-5qqbwZk23AW6s7svmAxOS47oiRVIXfEzs4TuXcYKwEhmshMQPmXfPEwyxxwa9F-HUbuUOXsTHNsUvsVWrb4cl58RZw6uJScyPnKt-ilg__" alt="" />
                </div>
                <div className='profile_container_navbar_info_wrap_btn'>
                  <button className='profile_container_navbar_info_wrap_btn_button'>Edit profile</button>
                </div>
              </div>

              <div className='profile_container_navbar_info_wrapperInfo'>

                <div className='profile_container_navbar_info_wrapperInfo_text'>
                  <h1>Bobur</h1>
                  <p>@bobur_mavlonov</p>
                </div>

                <div className='profile_container_navbar_info_wrapperInfo_linkWrapper'>
                  <h1>UX&UI designer at <a href="#">@abutechuz</a></h1>
                </div>

                

                <div className='profile_container_navbar_info_wrapperInfo_itenWrapper'>
                    <div className='profile_container_navbar_info_wrapperInfo_itenWrapper_div'>
                      <img src={Frame1} alt="" />
                      <h1>Mashag’daman</h1>
                    </div>
                    <div className='profile_container_navbar_info_wrapperInfo_itenWrapper_div'>
                      <img src={Frame2} alt="" />
                      <a href='#'>Mashag’daman</a>
                    </div>
                    <div className='profile_container_navbar_info_wrapperInfo_itenWrapper_div'>
                      <img src={Frame3} alt="" />
                      <h1>Born November 24, 2000</h1>
                    </div>
                    <div className='profile_container_navbar_info_wrapperInfo_itenWrapper_div'>
                      <img src={Frame4} alt="" />
                      <h1>Joined May 2020</h1>
                    </div>
                </div>

                <div className='profile_container_navbar_info_wrapperInfo_folovers'>
                  <span className='profile_container_navbar_info_wrapperInfo_folovers_span'>
                    <h1>67</h1>
                    <p>Following</p>
                  </span>
                  <span className='profile_container_navbar_info_wrapperInfo_folovers_span'>
                    <h1>47</h1>
                    <p>Followers</p>
                  </span>
                </div>

              </div>

            </div>

          </nav>
          


          <main className='profile_container_main'>

            <div className='profile_container_main_peaplePages'>
              <div className='profile_container_main_peaplePages_wrap_publick'>
                <div className='home_container_peaplePages_wrap_publick_img'>
                  <img src="https://s3-alpha-sig.figma.com/img/81d2/ed4a/6fa4b20a69987ae2b4ea2ed92fd045a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHhz4t73gAZrJlaZ~VzUPRnJvqPruYjRcvQmvRi3GuUHinVOifu2UgUPZIzNnaa~KQX6SIexDdog6foM5jp6uwCRm82MyTwmaSfoaZwHuttlFTclGyNDra6B8KgPkdheqejvMIBb~zZOt4Ov~w0vYL2O6JbDLVKfSz2j0TSLdGTL2s8cSlovLYzzXpKnxkyjJBE-4RS54Gq1R7VzN5zz6X6fBapMUpH6YwymmRs-qeCBd-5qqbwZk23AW6s7svmAxOS47oiRVIXfEzs4TuXcYKwEhmshMQPmXfPEwyxxwa9F-HUbuUOXsTHNsUvsVWrb4cl58RZw6uJScyPnKt-ilg__" alt="" />
                </div>
                <div className='home_container_peaplePages_wrap_publick_wrapper'>
                  <div className='home_container_peaplePages_wrap_publick_wrapper_info'>
                    <h1>Bobur</h1>
                    <p>@bobur_mavlonov · Apr 1</p>
                  </div>
                  <div className='home_container_peaplePages_wrap_publick_wrapper_text'>
                    <h1>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</h1>
                  </div>


                  <div className='home_container_peaplePages_wrap_publick_wrapper_function'>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={comment} alt="" />
                      <p>10</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={retweet} alt="" />
                      <p>1</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={like} alt="" />
                      <p>8</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={share} alt="" />
                      <p></p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={statistics} alt="" />
                      <p></p>
                    </span>
                  </div>

                </div>
                <div className='home_container_peaplePages_wrap_publick_ellipse'>
                  <img src={ellipse} alt="" />
                </div>

              </div>


                <div className='profile_container_main_peaplePages_wrap_publick'>
                  <div className='home_container_peaplePages_wrap_publick_img'>
                    <img src="https://s3-alpha-sig.figma.com/img/81d2/ed4a/6fa4b20a69987ae2b4ea2ed92fd045a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHhz4t73gAZrJlaZ~VzUPRnJvqPruYjRcvQmvRi3GuUHinVOifu2UgUPZIzNnaa~KQX6SIexDdog6foM5jp6uwCRm82MyTwmaSfoaZwHuttlFTclGyNDra6B8KgPkdheqejvMIBb~zZOt4Ov~w0vYL2O6JbDLVKfSz2j0TSLdGTL2s8cSlovLYzzXpKnxkyjJBE-4RS54Gq1R7VzN5zz6X6fBapMUpH6YwymmRs-qeCBd-5qqbwZk23AW6s7svmAxOS47oiRVIXfEzs4TuXcYKwEhmshMQPmXfPEwyxxwa9F-HUbuUOXsTHNsUvsVWrb4cl58RZw6uJScyPnKt-ilg__" alt="" />
                  </div>
                  <div className='home_container_peaplePages_wrap_publick_wrapper'>
                    <div className='home_container_peaplePages_wrap_publick_wrapper_info'>
                      <h1>Bobur</h1>
                      <p>@bobur_mavlonov · Apr 1</p>
                    </div>
                    <div className='home_container_peaplePages_wrap_publick_wrapper_text'>
                      <h1>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 
                          <br/>
                          <br/>
                          Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
                          <br/>
                          <br/>
                          Gap faqat biznes trenerlar haqida emas.
                      </h1>
                  </div>


                  <div className='home_container_peaplePages_wrap_publick_wrapper_function'>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={comment} alt="" />
                      <p></p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={retweet} alt="" />
                      <p>5</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={like} alt="" />
                      <p>9</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={share} alt="" />
                      <p></p>
                    </span>
                      <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                        <img src={statistics} alt="" />
                        <p></p>
                      </span>
                    </div>

                  </div>


                  <div className='home_container_peaplePages_wrap_publick_ellipse'>
                    <img src={ellipse} alt="" />
                  </div>

                </div>

                <div className='profile_container_main_peaplePages_wrap_publick'>
                  <div className='home_container_peaplePages_wrap_publick_img'>
                    <img src="https://s3-alpha-sig.figma.com/img/81d2/ed4a/6fa4b20a69987ae2b4ea2ed92fd045a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHhz4t73gAZrJlaZ~VzUPRnJvqPruYjRcvQmvRi3GuUHinVOifu2UgUPZIzNnaa~KQX6SIexDdog6foM5jp6uwCRm82MyTwmaSfoaZwHuttlFTclGyNDra6B8KgPkdheqejvMIBb~zZOt4Ov~w0vYL2O6JbDLVKfSz2j0TSLdGTL2s8cSlovLYzzXpKnxkyjJBE-4RS54Gq1R7VzN5zz6X6fBapMUpH6YwymmRs-qeCBd-5qqbwZk23AW6s7svmAxOS47oiRVIXfEzs4TuXcYKwEhmshMQPmXfPEwyxxwa9F-HUbuUOXsTHNsUvsVWrb4cl58RZw6uJScyPnKt-ilg__" alt="" />
                  </div>
                  <div className='home_container_peaplePages_wrap_publick_wrapper'>
                    <div className='home_container_peaplePages_wrap_publick_wrapper_info'>
                      <h1>Bobur</h1>
                      <p>@bobur_mavlonov · Apr 1</p>
                    </div>
                    <div className='home_container_peaplePages_wrap_publick_wrapper_text'>
                      <h1>A bo'pti maskamasman</h1>
                      <div>
                        <img src="https://s3-alpha-sig.figma.com/img/eb99/e0b1/775f430848a9734dd328a1ef42df67e0?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MZsb3t~WKnii0JTuEepTfhnykxUOC48kLWSkvlzjuFHo9hsCjUmyAzq213MDDJJYR8iHhFyp7U8Mz4EIhnXY15CXuA8PIYtHlHu7S8SFCtbAJm~KyzgQikVk2u-2j5~TW3JkgpXHJVWEF2M0yhxXLA9G3R9jjhFcEEjkstad55~V3mkboNBjxaV9lvxhaCK3qjqIonPleOCoMX2NJrnl1Fgkm6MMxy-o~deEW2g-hqIVcjPj8SsdCo4-bh2aG72H6rGMs3Ms~qApqNPdt~JWnGjNXMw7~eYS5CTj~HeVZ6qjefABrizUWzIGIWiiIpC2NmpclciFs9knC63bT~neog__" alt="" />
                      </div>
                  </div>


                  <div className='home_container_peaplePages_wrap_publick_wrapper_function'>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={comment} alt="" />
                      <p>10</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={retweet} alt="" />
                      <p>1</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={like} alt="" />
                      <p>8</p>
                    </span>
                    <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                      <img src={share} alt="" />
                      <p></p>
                    </span>
                      <span className='home_container_peaplePages_wrap_publick_wrapper_function_click'>
                        <img src={statistics} alt="" />
                        <p></p>
                      </span>
                    </div>

                  </div>


                  <div className='home_container_peaplePages_wrap_publick_ellipse'>
                    <img src={ellipse} alt="" />
                  </div>

                </div>

              </div>
            
          </main>


      </div>



    </div>
  )
}
