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
        <a  className="challenge3-a-image1" href='https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoibFhPc1M5WCtFak9MVzFBN3EraXBOTWFQbDcxVXBuNENEcUJVcVVKRmFPSXdXUjVINDdjRW9zdzc4aENRYXB3VjJ4L0RVQWxYVXdzbjlMSUw0NjloOU9ZZTgveHp0dHBjTUVjYWpqM1Vla2szbzFuQS9QVXFjckhLM1g3UnN6cFJSZ282RDVvPSIsInMiOiJmTFB1emR2dEMyRlU5Rngya0dsWXdBPT0iLCJpIjoiWURHbmlVa3FuR1Qvc09WZiJ9'target="_blank">
        <img
          alt="image"
          src="/playground_assets/phone.png"
          className="challenge3-image1"
        />
        </a>
        <label className='challenge3-text'>Click to Unlock</label>


        <a href='https://drive.google.com/file/d/1sZCopcJAEBr8Z6jWhG_VfB5si7nTHMvI/view?usp=share_link' target="_blank">
        <img
          alt="image"
          src="/playground_assets/map.png"
          className="challenge3-image1"
        />
        </a>https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoibFhPc1M5WCtFak9MVzFBN3EraXBOTWFQbDcxVXBuNENEcUJVcVVKRmFPSXdXUjVINDdjRW9zdzc4aENRYXB3VjJ4L0RVQWxYVXdzbjlMSUw0NjloOU9ZZTgveHp0dHBjTUVjYWpqM1Vla2szbzFuQS9QVXFjckhLM1g3UnN6cFJSZ282RDVvPSIsInMiOiJmTFB1emR2dEMyRlU5Rngya0dsWXdBPT0iLCJpIjoiWURHbmlVa3FuR1Qvc09WZiJ9

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
