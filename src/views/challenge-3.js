import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './challenge-3.css'

const Challenge3 = (props) => {
  

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to new page
    history.push(`/${inputValue}`);
  }

  return (
    <div className="challenge3-container">
      <Helmet>
        <title>Challenge-3 - OnConf template1</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>
      <div className="challenge3-banner">
        <h1 className="challenge3-text">Unlock Mr.Sherlock !!</h1>
      </div>
      <div className="challenge3-blog">
        <img
          alt="image"
          src="/playground_assets/c3-phone.png"
          className="challenge3-image"
        />
        <a  className="challenge3-a-image1" href='https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiZGVYbkZCQmdnUHNkeS9MZ0tGbjJMZjFoMWRpbXR0TlIzeW5JaGtUd2loYW94V3kvQkJid0w2SmpjUkxJa2h2aUpPMkFBcU1BUXlhZy8vcFpIY1J2QXY2dU9qdjYxWEt1WG80R3p6aXA0T0N5eUdVTHVwd0cwN1NGMWY0eHQzWitKYVEwaU9BOXAvQWZralU3TlhCSWxGMUg1dFNFbytuL1ZsNWdBZy9Ca1AwRCsyVDBYS2RadzJ6VXUyUDdTc1M0enBIRGZIOFN3SEllNUVyNy9HYVZoT25Xc3VnUzNPMnUwcXYzYUE9PSIsInMiOiJxZlhmby9pemowZUc3WDh3YS9SWktnPT0iLCJpIjoiZWtPM1JpK2k2amRHNzJwdiJ9'target="_blank">
        <img
          alt="image"
          src="/playground_assets/phone.png"
          className="challenge3-image1"
        />
        </a>
        <label className='challenge3-text'>Click to Unlock</label>


        <a href='https://firebasestorage.googleapis.com/v0/b/sherlock23-19008.appspot.com/o/Sherlock%2Fmap_F.pdf?alt=media&token=e4676092-b95e-4882-9bb0-2fa75dee3074' target="_blank">
        <img
          alt="image"
          src="/playground_assets/map.png"
          className="challenge3-image1"
        />
        </a>

        <form onSubmit={handleSubmit}>

      <label>
        Enter key:
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <br/>
      <button href="">
            <span> Submit </span>
            <div id="clip">
                <div id="leftTop" class="corner"></div>
                <div id="rightBottom" class="corner"></div>
                <div id="rightTop" class="corner"></div>
                <div id="leftBottom" class="corner"></div>
            </div>
            <span id="rightArrow" class="arrow"></span>
            <span id="leftArrow" class="arrow"></span>
        </button>    </form>
      </div>

        
    </div>
  )
}

export default Challenge3
