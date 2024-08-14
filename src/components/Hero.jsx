import React from 'react';
import './Hero.css';  // Ensure this path is correct based on your file structure

const Hero = () => {
  return (
    <div className='container'>
      <header>
        <div className="left">
          <h1>FrostBurst</h1>
          <img src="/images/2.png" alt="Design" />
        </div>
        <div className="author">
      
         
          <img src="/images/code.png" alt="Code" />
        </div>
      </header>
      <div className="banner">
        <div className="product">
          <div className="soda" style={{ '--url': `url(/images/bg.png)` }}>
          </div>
          <div className="soda" style={{ '--url': `url(/images/bg2.png)` }}>
          </div>
        </div>
        <div className="rock">
          <img src="/images/rock1.png" alt="Rock 1" />
          <img src="/images/rock2.png" alt="Rock 2" />
          <img src="/images/rock3.png" alt="Rock 3" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
