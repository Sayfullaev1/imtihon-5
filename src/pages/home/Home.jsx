import React from 'react'
import './Home.css'


import star from "../../photos/instuments/Customize.svg"
import gallery from "../../photos/instuments/image.svg"
import gif from "../../photos/instuments/gif.svg"
import stats from "../../photos/instuments/stats.svg"
import smiel from "../../photos/instuments/smile.svg"
import schedule from "../../photos/instuments/schedule.svg"


import comment from '../../photos/functionalInstrumets/comment.svg'
import retweet from '../../photos/functionalInstrumets/retweet.svg'
import like from '../../photos/functionalInstrumets/like.svg'
import share from '../../photos/functionalInstrumets/share.svg'
import statistics from '../../photos/functionalInstrumets/statistics.svg'






import ellipse from "../../photos/instuments/Vector.png"



export default function Home() {
  return (
    <div className='home'>



      <div className='home_container'>


        <div className='home_container_info'>
          <h1 className='home_container_info_text'>Home</h1>
          <img src={star} alt="" />
        </div>


        <div className='home_container_myPage'>

          <div className='home_container_myPage_infoWrapper'>
            <div className='home_container_myPage_infoWrapper_img'>
              <img src="https://s3-alpha-sig.figma.com/img/81d2/ed4a/6fa4b20a69987ae2b4ea2ed92fd045a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHhz4t73gAZrJlaZ~VzUPRnJvqPruYjRcvQmvRi3GuUHinVOifu2UgUPZIzNnaa~KQX6SIexDdog6foM5jp6uwCRm82MyTwmaSfoaZwHuttlFTclGyNDra6B8KgPkdheqejvMIBb~zZOt4Ov~w0vYL2O6JbDLVKfSz2j0TSLdGTL2s8cSlovLYzzXpKnxkyjJBE-4RS54Gq1R7VzN5zz6X6fBapMUpH6YwymmRs-qeCBd-5qqbwZk23AW6s7svmAxOS47oiRVIXfEzs4TuXcYKwEhmshMQPmXfPEwyxxwa9F-HUbuUOXsTHNsUvsVWrb4cl58RZw6uJScyPnKt-ilg__" alt="" />
            </div>
            <div className='home_container_myPage_infoWrapper_text'>
              <p>What’s happening</p>
            </div>
          </div>

          <div className='home_container_myPage_reaction'>

              <div className='home_container_myPage_reaction_imgWrapper'>
                <div className='home_container_myPage_reaction_imgWrapper_img'>
                  <img src={gallery} alt="" />
                </div>
                <div className='home_container_myPage_reaction_imgWrapper_img'>
                  <img src={gif} alt="" />
                </div>
                <div className='home_container_myPage_reaction_imgWrapper_img'>
                  <img src={stats} alt="" />
                </div>
                <div className='home_container_myPage_reaction_imgWrapper_img'>
                  <img src={smiel} alt="" />
                </div>
                <div className='home_container_myPage_reaction_imgWrapper_img'>
                  <img src={schedule} alt="" />
                </div>
              </div>

              <div className='home_container_myPage_reaction_btnWrapper'>
                <button className='home_container_myPage_reaction_btnWrapper_button' type="button">Tweet</button>
              </div>

          </div>

          
          
        </div>


        <div className='home_container_peaplePages'>


          <div className='home_container_peaplePages_wrap'>

            <div className='home_container_peaplePages_wrap_publick'>
              <div className='home_container_peaplePages_wrap_publick_img'>
                <img src="https://s3-alpha-sig.figma.com/img/cb5d/f497/dd3d35e65b08dec485964053c7aeb2b0?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zpo-gRM8S4aXwInDi1VDC1O6g86DZeuAlp6S~iOdeFMCZLd6n36Z9muZB04~zofh5BLGStf1zZ8cMQhfUwbkKYDDoZW4OGXObi8c4xT2x-Ezx0fbp6JYrRrwDlgLPzfxWugs6-eMNJqjFSplM7CA00mT5jkT5ypK-2j71Hb~8-uitCAdyTTi2wkzjap465KNzNYx-ae-BUyzdQDi18Ph0Aim4m1od2Y8Tln-5CXllQ9r6ZVPfC9~8cOmykeefLIvwW4uviNxMsObhuLO9ztYZL5gld9ElbQKz6~NIBd53TjVL77VNizjgCW4xLdQsgkTMHnfczfLSo8j5og8VYtZ6g__" alt="" />
              </div>
              <div className='home_container_peaplePages_wrap_publick_wrapper'>
                <div className='home_container_peaplePages_wrap_publick_wrapper_info'>
                  <h1>Designsta</h1>
                  <p>@inner · 25m</p>
                </div>
                <div className='home_container_peaplePages_wrap_publick_wrapper_text'>
                  <h1>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</h1>
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


            <div className='home_container_peaplePages_wrap_publick'>
              <div className='home_container_peaplePages_wrap_publick_img'>
                <img src="https://s3-alpha-sig.figma.com/img/4557/5cef/3e5ab40e3b0be0ae38bf3606d4d5e7dc?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDH0tPrepexA0SHGj3t~n9~4pBBJCKRyeyfCGnueBkqTpKCYmHZOpXS9Lyg6BVEVfczfqLF-TVUTwYaRwZ7exVm~9bj0UW2C53Mzfe6YsTSMDHrV~Kgky-DDZxSHZ6ONpd3zv8INS2En5c3tDntBO~9S4VfXmztl1hb0SHf-qnSTfuh1~dRv8Mkr1iPjFmvcCgSlhJcbRpb1W3C5cOorLUA7clNpnKT-yAjlM1-5vuDP0k7QkD1rxK53SaavYA-~WaohyCwzueFZhUbWEPNiZUeabUWZXDnX~h7LRIBw~Db9QqCCOJPCwjSm7WXGs0hU00nHc1LTwNYRnWbCAcjFJw__" alt="" />
              </div>
              <div className='home_container_peaplePages_wrap_publick_wrapper'>
                <div className='home_container_peaplePages_wrap_publick_wrapper_info'>
                  <h1>cloutexhibition</h1>
                  <p>@RajLahoti · 22m</p>
                </div>
                <div className='home_container_peaplePages_wrap_publick_wrapper_text'>
                  <h1>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</h1>
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


            <div className='home_container_peaplePages_wrap_publick'>
              <div className='home_container_peaplePages_wrap_publick_img'>
                <img src="https://s3-alpha-sig.figma.com/img/4aaa/aea1/c87bbdae1eb3a22a56a7b1ae54b93e95?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xl~fvBMYE9akHZ195gyi9GM2nnzdD7nxKL0kdxd5ahbup3pztdfhxI0Ex11Lr5p~hq4D4HPoc8CTFVrU1o8eggTRWchIzcAQtZM0rI2R0JcwdU9M3Qn5Cc~iEGHBw-qYEHCPO-~uncWu7Jzt3Y2MuhM1xbG8tNBtUfFXnqDDDHMicgtFvHjfl1m-7uHUXZER54dWCF6dZKMz8nXqe8q9K2Z8X53eA~y35UxgjSQsTgh-NylbvsQJXLiN800njSF38W4oIIsh~OwPD7vXae1Sdtsc6Up-h2tPUznuV6TZ8ezGtyywr9gHtyOZpR1tmsqTf11XDaySP~lMS9MyEDdXRg__" alt="" />
              </div>
              <div className='home_container_peaplePages_wrap_publick_wrapper'>
                <div className='home_container_peaplePages_wrap_publick_wrapper_info'>
                  <h1>CreativePhoto</h1>
                  <p>@cloutexhibition · 1h</p>
                </div>
                <div className='home_container_peaplePages_wrap_publick_wrapper_text'>
                  <h1>Обетда..... <br/> Кечирин глар</h1>
                  <div>
                    <img src="https://s3-alpha-sig.figma.com/img/669d/b50e/3b6ca5ba854fc255630554d46135bac6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=biDfMLBVnJjeaBEhJbKeOnXTd0rHjuYQrsajK-oSX1BVBARLbb9glVcqNVMAeQilIkl29rAIFSt-gPi2FI74EGWKhIr9HNJEGOAWLK3NLXfyQR6vP-EZUCqTBvZZk3kJton26u~SGXv5WS7MW7otUMn4BY-4bzcRqlPXEC6WFls4SiCru3uEonoqfUXscNmfWLGO0wgdbvNFPBJ~HVNc0XzBnJZXmxJcCBUB3roVKohgiLpx8XIGcY7SRvef2MM6FoNkR4C21kMxh4vaUmAvHrZ4-UyWBrf36WHy0hR3ufzZo9pHI6XIdmFRqe7G7gai2FmMIddg46P5~pmDYiRhQg__" alt="" />
                  </div>
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

            

          </div>


        </div>


      </div>



    </div>
  )
}
