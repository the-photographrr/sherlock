import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import './challenge-1.css'

const Challenge1 = (props) => {
  

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${inputValue}`);
  }

  return (
    <div className="challenge1-container">
      <Helmet>
        <title>Challenge-1 - OnConf template1</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>
      <div className="challenge1-banner">
        <h1 className="challenge1-text">It&apos;s not what you see!</h1>
      </div>
      <div className="challenge1-blog">
        <img
          alt="image"
          src="/playground_assets/frame%201-1400w.png"
          className="challenge1-image"
        />
        <img
          alt="image"
          src="/playground_assets/chatscreenshot.jpg"
          className="challenge1-image1"
        />

        <a href='https://firebasestorage.googleapis.com/v0/b/sherlock23-19008.appspot.com/o/Sherlock%2Fmap_F.pdf?alt=media&token=e4676092-b95e-4882-9bb0-2fa75dee3074' target="_blank">
        <label className='challenge4-text'>Check this Out 👇</label>

        <img
          alt="image"
          src="/playground_assets/map.png"
          className="challenge1-image1"
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


function MyForm() {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // use inputValue as key
    console.log(inputValue);
    // redirect to new page
    history.push(`/${inputValue}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter key:
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
}

export default Challenge1
