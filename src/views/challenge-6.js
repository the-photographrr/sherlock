import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './challenge-6.css'

const Challenge6 = (props) => {
  

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to new page
    history.push(`/${inputValue}`);
  }

  return (
    <div className="challenge6-container">
      <Helmet>
        <title>You Won</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>

      <div className="challenge6-blog">
        <img
          alt="image"
          src="/playground_assets/l1.png"
          className="challenge6-image"
        />
        <img
          alt="image"
          src="/playground_assets/l2.png"
          className="challenge6-image"
        />
        <img
          alt="image"
          src="/playground_assets/l3.png"
          className="challenge6-image"
        />

        {/* <label className='challenge6-text'>Check this Out </label> */}
        <div className="challenge6-banner">
        <h1 className="challenge6-text">You Did It  </h1>
      </div>

      </div>

        
    </div>
  )
}

export default Challenge6
