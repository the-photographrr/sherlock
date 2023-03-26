import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './challenge-2.css'

const Challenge2 = (props) => {
  

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to new page
    history.push(`/${inputValue}`);
  }

  return (
    <div className="challenge2-container">
      <Helmet>
        <title>Challenge-1 - OnConf template1</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>
      <div className="challenge2-banner">
        <h1 className="challenge2-text">Unlock Mr.Sherlock !!</h1>
      </div>
      <div className="challenge2-blog">
        <img
          alt="image"
          src="/playground_assets/c2-dialog.png"
          className="challenge2-image"
        />
        <img
          alt="image"
          src="/playground_assets/c2puzzle.png"
          className="challenge2-image1"
        />
        <label className='challenge2-text'>Open the Locker</label>


        <a href='https://drive.google.com/file/d/1sZCopcJAEBr8Z6jWhG_VfB5si7nTHMvI/view?usp=share_link'target="_blank">
        <img
          alt="image"
          src="/playground_assets/map.png"
          className="challenge2-image1"
        />
        </a>

        <form onSubmit={handleSubmit}>

      <label >
        Enter key:
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <br/>
      <button href="">
        Submit
            <span></span>
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

export default Challenge2
