import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import './challenge-6.css'

const Challenge6 = (props) => {

  return (
    <div className="challenge6-container">
      <Helmet>
        <title>That was so close</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>

      <div className="challenge6-blog">
        <img
          alt="image"
          src="/playground_assets/l7.png"
          className="challenge6-image"
        />
        {/* <img
          alt="image"
          src="/playground_assets/l2.png"
          className="challenge6-image"
        />
        <img
          alt="image"
          src="/playground_assets/l3.png"
          className="challenge6-image"
        /> */}

        {/* <label className='challenge6-text'>Check this Out </label> */}
        <div className="challenge6-banner">
        <h1 className="challenge6-text">That Was So Close  </h1>
      </div>

      </div>

        
    </div>
  )
}

export default Challenge6
