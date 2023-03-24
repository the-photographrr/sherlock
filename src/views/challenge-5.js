import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './challenge-5.css'

const Challenge5 = (props) => {
  

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to new page
    history.push(`/${inputValue}`);
  }

  return (
    <div className="challenge5-container">
      <Helmet>
        <title>You Did it</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>

      <div className="challenge5-blog">
        <img
          alt="image"
          src="/playground_assets/l1.png"
          className="challenge5-image"
        />
        <img
          alt="image"
          src="/playground_assets/l2.png"
          className="challenge5-image"
        />
        <img
          alt="image"
          src="/playground_assets/l3.png"
          className="challenge5-image"
        />
        {/* <label className='challenge5-text'>Check this Out </label> */}

        <div className="challenge5-banner">
        <h1 className="challenge5-text">You Did It  </h1>
      </div>
      </div>

        
    </div>
  )
}

export default Challenge5
