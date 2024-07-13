import React from 'react';

import './index.css'
function Video(){ 
  const handleCoverPhotoClick = (videoLink) => {
    window.open(videoLink);
};


    return(
        <div>
         <div className='title'>
             <h1>HOW THINGS WORK</h1> 
             <h2>GITHUB</h2>
         </div>
<div className='introduction-github'>
  <div><h2>Introduction to Github- presented by Ivy Wanjiku</h2></div>
  <div><h2>How GitHub was developed - presented by Fanny Ingabire</h2></div>

</div>
<div className='loom-video'>
    
         <div className="video-thumbnail">
          
                <a href="https://www.loom.com/share/7b653b5484fa45d5819963fe17516fac">
                    <p>GitHub-How things work - Google Slides - 8 July 2024 - Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/7b653b5484fa45d5819963fe17516fac">
                    <img src="https://cdn.loom.com/sessions/thumbnails/7b653b5484fa45d5819963fe17516fac-1720554951073-with-play.gif"/>
                </a>
                      <div className="cover-photo">
                        <img src="/media/purplemic.png" alt="GitHub-How things work" />
                        <div className="play-button" onClick={() => handleCoverPhotoClick('https://www.loom.com/share/7b653b5484fa45d5819963fe17516fac')}></div>
                      </div>
          </div>

  
          <div className="video-thumbnail">
                <a href="https://www.loom.com/share/1aec7f0a5ab04d5685ca12f829836d38">
                    <p>Exploring the Evolution of GitHub :rocket: - Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/1aec7f0a5ab04d5685ca12f829836d38">
                    <img  src="https://cdn.loom.com/sessions/thumbnails/1aec7f0a5ab04d5685ca12f829836d38-with-play.gif"/>
                </a>

                  <div className="cover-photo" onClick={() => handleCoverPhotoClick('https://www.loom.com/share/1aec7f0a5ab04d5685ca12f829836d38')}>
                    <img src='/media/purplemic.png' alt="GitHub-How things work" />
                    <div className="play-button"></div>
                  </div>
                      
          </div>
</div>
<div className='revenue-github'>
  <div><h2>Understanding how Github generate revenue</h2></div>
  <div><h2>Positives and Shortcomings of Github</h2></div>

</div>

 <div className='videos2'>

          <div className="video-thumbnail"> 
              <a href="https://www.loom.com/share/201f8b28805944a8bdbbe3a9d8d2f467">
                  <p>Understanding Github's Revenue Model - Watch Video</p>
              </a>
             <a href="https://www.loom.com/share/201f8b28805944a8bdbbe3a9d8d2f467">
                  <img  src="https://cdn.loom.com/sessions/thumbnails/201f8b28805944a8bdbbe3a9d8d2f467-with-play.gif"/>
              </a>

            <div className="cover-photo" onClick={() => handleCoverPhotoClick('https://www.loom.com/share/201f8b28805944a8bdbbe3a9d8d2f467')}>
                <img src='/media/purplemic.png' alt="GitHub-How things work" />
                <div className="play-button"></div>
            </div>
          </div>

            <div className="video-thumbnail">
                  <a href="https://www.loom.com/share/e0a628c933d34e1fbe40f00b07ddced2">
                    <p>Understanding the Pros and Cons of GitHub 📹 - Watch Video</p>
                  </a>
                  <a href="https://www.loom.com/share/e0a628c933d34e1fbe40f00b07ddced2">
                    <img  src="https://cdn.loom.com/sessions/thumbnails/e0a628c933d34e1fbe40f00b07ddced2-with-play.gif"/>
                  </a>

                <div className="cover-photo" onClick={() => handleCoverPhotoClick('https://www.loom.com/share/e0a628c933d34e1fbe40f00b07ddced2')}>
                  <img src='/media/purplemic.png' alt="GitHub-How things work" />
                  <div className="play-button"></div>
                </div>
                    
            </div>

</div>
            <div className='architecture-github'>
                     <div><h2>Architecture outline</h2></div>
            </div>


  <div className='loom-video3'>
          <div className="video-thumbnail">

                <a href="https://www.loom.com/share/0fb0846b623e459681106701bb7f33df">
                    <p>Maendeleo ya Mradi wa Backend - Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/0fb0846b623e459681106701bb7f33df">
                  <img src="https://cdn.loom.com/sessions/thumbnails/0fb0846b623e459681106701bb7f33df-with-play.gif"/>
                </a>

                <div className="cover-photo" onClick={() => handleCoverPhotoClick('https://www.loom.com/share/0fb0846b623e459681106701bb7f33df')}>
                  <img src='/media/purplemic.png' alt="GitHub-How things work" />
                  <div className="play-button"></div>
                </div>       
          </div>
  </div>
</div>

)};
export default Video;




