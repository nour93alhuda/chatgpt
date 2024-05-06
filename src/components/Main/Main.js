import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main=()=>{
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    const text = 'Suggest beautiful places to see on an upcoming road trip';
    const text2='Briefly summarize this concept :urban planning;'
    const text3='Brainstorm team bonding activities for our work retreat';
    const text4='Improve the readability of the following code';
    return(
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>
                {!showResult
                ?<>
                  <div className='greet'>
                    <p><span>Hello,Dev,</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div  className='cards'>
                    <div onClick={()=>onSent(text)} className='card'>
                        {/* <p>Suggest beautiful places to see on an upcoming road trip</p> */}
                        <p>{text}</p>
                      
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div onClick={()=>onSent(text2)} className='card'>
                        <p>{text2}</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div onClick={()=>onSent(text3)} className='card'>
                        <p>{text3}</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div onClick={()=>onSent(text4)} className='card'>
                        <p>{text4}</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :
                <div className='result'> 
                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                     </div>
                     <div className='result-data'>
                        <img src={assets.gemini_icon} alt="" />
                        {loading?
                        <div className='loader'>
                            <hr />
                            <hr /> 
                           <hr />
                        </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                        

                     </div>
                      </div>
                }
              
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />
                        {input? <img onClick={()=>onSent()} src={assets.send_icon} alt='' />
                        :null}   
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default Main;