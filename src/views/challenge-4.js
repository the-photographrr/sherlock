import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './challenge-4.css'

const Challenge4 = (props) => {
  

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to new page
    history.push(`/${inputValue}`);
  }

  return (
    <div className="challenge4-container">
      <Helmet>
        <title>Challenge-4 - OnConf template1</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>
      <div className="challenge4-banner">
        <h1 className="challenge4-text">Dig it Deep . . . </h1>
      </div>
      <div className="challenge4-blog">
        <img
          alt="image"
          src="/playground_assets/c4phone.png"
          className="challenge4-image"
        />
        {/* <a  className="challenge4-a-image1" href='https://firebasestorage.googleapis.com/v0/b/sherlock23-19008.appspot.com/o/Sherlock%2FSmart_phone.pdf?alt=media&token=7620c1ca-a5c5-45c1-ada0-9a9350ccf1de'target="_blank">
        <img
          alt="image"
          src="/playground_assets/phone.png"
          className="challenge4-image1"
        />
        </a> */}
        <label className='challenge4-text'>Check this Out 👇</label>


        <a href='https://firebasestorage.googleapis.com/v0/b/sherlock23-19008.appspot.com/o/Sherlock%2Fmapp5.pdf?alt=media&token=83eb3776-fa20-4c84-a1bf-ea0950403a7f' target="_blank">
        <img
          alt="image"
          src="/playground_assets/map.png"
          className="challenge4-image1"
        />
        </a>

        <form onSubmit={handleSubmit}>

      <label>
        Enter key:
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <br/>
      <button href="">
            <span>  </span>
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

export default Challenge4
