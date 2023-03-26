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


        <a href='https://drive.google.com/file/d/1mJ2v7U9tyigaxCgidjpBsCZ3aLcmy28F/view?usp=share_link' target="_blank">
        <img
          alt="image"
          src="/playground_assets/map.png"
          className="challenge4-image1"
        />
        </a>

      </div>

        
    </div>
  )
}

export default Challenge4
