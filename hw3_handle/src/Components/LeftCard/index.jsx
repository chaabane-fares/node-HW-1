import './index.css';
import personImg from '../../Assets/ramos.jpg'
import { useState } from 'react';
export default function LeftCard(){
    
   // const [day,setDay]=useState(<RightCards/>)
   //onClick={()=>handleDailyClick()}
    
    return(
        <div className='left-container'>
            <div className='presentation'>
                <img src={personImg} alt="person" />
                <h3 className='text' id='report'>Report for</h3>
                <h1 className='text'>Jeremy Robson</h1>
            </div>
            <div className='period'>
                <h2 >Daily</h2>
                <h2 >Weekly</h2>
                <h2 >Monthly</h2>
            </div>
        </div>
    )
}
