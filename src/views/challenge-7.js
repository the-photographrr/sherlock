import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import './challenge-7.css'

const Challenge7 = (props) => {

  return (
    <div className="challenge7-container">
      <Helmet>
        <title>sorry</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>

      <div className="challenge7-blog">
        <img
          alt="image"
          src="/playground_assets/l6.png"
          className="challenge7-image"
        />
        {/* <img
          alt="image"
          src="/playground_assets/l2.png"
          className="challenge7-image"
        />
        <img
          alt="image"
          src="/playground_assets/l3.png"
          className="challenge7-image"
        /> */}

        {/* <label className='challenge7-text'>Check this Out </label> */}
        <div className="challenge7-banner">
        <h1 className="challenge7-text">so sorry  </h1>
      </div>

      </div>

        
    </div>
  )
}

export default Challenge7
