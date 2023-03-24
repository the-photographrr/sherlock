import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './error.css'

const ErrorPage = (props) => {
  window.scrollTo(0, 0);
  return (
    <div className="error-container">
      <Helmet>
        <title>SOMETHING ' S WRONG</title>
        <meta property="og:title" content="OnConf template1" />
      </Helmet>
      <section className="error-hero">
        <div className="error-background">
          <img
            alt="image"
            src="/playground_assets/frame%2034-04%2012-1500h.jpg"
            className="error-image"
          />
        </div>
        <div className="error-hero-content">
          <div class="glitch">
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
          <div class="line">SOMETHING ' S WRONG</div>
        </div>
        <h2 className="error-text02">
          &quot;Go Back the way and find it&quot;
        </h2>
        </div>
      </section>
      <footer className="error-footer">
        <img
          alt="logo"
          src="/playground_assets/dyuksha%20d%20colour-1500h.png"
          className="error-image1"
        />
        <span className="error-text11">Dept. of ECE, Dyuksha&apos;23</span>
      </footer>
    </div>
  )
}

export default ErrorPage
