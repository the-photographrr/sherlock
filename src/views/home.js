import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  window.scrollTo(0, 0);
  return (
    <div className="home-container">
      <Helmet>
        <title>SHERLOCK D23</title>
        <meta property="og:title" content="OnConf template1" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/playground_assets/frame%2034-04%2012-1500h.jpg"
            className="home-image"
          />
        </div>
        <div className="home-hero-content">
          <div class="glitch">
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
          <div class="line">SHERLOCK</div>
        </div>
        </div>
      </section>
      <div className="home-banner">
        <h2 className="home-text02">
          &quot;The most important moments are the ones that make you realize
          there&apos;s no turning back&quot;
        </h2>
      </div>
      <div className="home-hero1">
        <h1 className="home-text03">PROLOGUE</h1>
        <span className="home-text04">
          <span>
            You play as the newest member of the team, The Vicious 7. You are assigned to gather the intel behind a former member, Joseph Kurian
            and to move forward with the current operation to arrest the notorious drug trafficking channel rumoured to be actively working in the campus.
          </span>
          <br className="home-text06"></br>
          <br></br>
          <span>
            FYI : Joseph Kurian is known to be an integral part of the
            investigative world, having contributed to bring major drug
            trafficking cases to the limelight and is also known for his calm
            demeanour even in the trickiest of situations. He is said to be
            popular among the ladies for his good looks which he cherishes a lot
            from time to time by carrying a mirror with him always. He is also a
            food freak who loves reading books . he usually carries around an
            ancient chronometer with him too.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text09"></br>
          <br></br>
        </span>
        <button href="">
        <Link to="/vicious-7">
            <span> I'm Ready</span>
            <div id="clip">
                <div id="leftTop" class="corner"></div>
                <div id="rightBottom" class="corner"></div>
                <div id="rightTop" class="corner"></div>
                <div id="leftBottom" class="corner"></div>
            </div>
            <span id="rightArrow" class="arrow"></span>
            <span id="leftArrow" class="arrow"></span>
            </Link>
        </button>
      </div>
      <footer className="home-footer">
        <img
          alt="logo"
          src="/playground_assets/dyuksha%20d%20colour-1500h.png"
          className="home-image1"
        />
        <span className="home-text11">Dept. of ECE, Dyuksha&apos;23</span>
      </footer>
    </div>
  )
}

export default Home
