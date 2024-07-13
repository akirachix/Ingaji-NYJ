import React from 'react';
import './index.css'

const Homepage =()=>{
 return(
    <div className='whole'>
        <div>
            <h1 className='title'>OUR TEAM</h1>
        </div>
        <div className='images'>
            <div className='top'>
        <div className='ivy'>
           <img src='pics/ivy.png' alt='Ivy' className='pic'/>
           <figcaption className='caption'>Ivy Wanjiku</figcaption>
           <figcaption className='caption'>Software Developer</figcaption>
           <figcaption className='caption'>Nationality:Kenyan</figcaption>
           <figcaption className='port'><a >View Portfolio</a></figcaption>
           </div>
           <div className='fanny'>
           <img src='pics/fanny.png' alt='Fanny' className='pic'/>
           <figcaption className='caption'>Ingabire Fanny</figcaption>
           <figcaption className='caption'>Software Developer</figcaption>
           <figcaption className='caption'>Nationality:Kenyan</figcaption>
           <figcaption className='port'> <a href='https://my-porto-rh3m.vercel.app/' >View Portfolio</a></figcaption>
           </div>
           </div>
           <div className='akwang'>
           <img src='pics/akwang.png' alt='Akwang' className='pic'/>
           <figcaption className='caption'>Akwang Deu</figcaption>
           <figcaption className='caption'>Software Developer</figcaption>
           <figcaption className='caption'>Nationality:Kenyan</figcaption>
           <figcaption className='port'> <a href='https://akwang.vercel.app/'>View Portfolio</a></figcaption>
           </div>
           <div className='bottom'>
           <div className='ajema'>
           <img src='pics/ajema.png' alt='Ajema' className='pic'/>
           <figcaption className='caption'>Ajema Agnes</figcaption>
           <figcaption className='caption'>Software Developer</figcaption>
           <figcaption className='caption'>Nationality:Kenyan</figcaption>
           <figcaption className='port'><a href='https://myportfolio-eosin-eight.vercel.app/' >View Portfolio</a></figcaption>
           </div>
           <div className='raziah'>
           <img src='pics/raziah.png' alt='Raziah' className='pic'/>
           <figcaption className='caption'>Raziah Abdulahi</figcaption>
           <figcaption className='caption'>Software Developer</figcaption>
           <figcaption className='caption'>Nationality:Kenyan</figcaption>
           <figcaption className='port'>Portfolio</figcaption>
           </div>
           </div>
        </div>
                  
    </div>

 ) ;  
}











export default Homepage