import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card1-image"
      />
      <h2 className="feature-card1-text">{props.title1}</h2>
      <h2 className="feature-card1-text1">{props.title}</h2>
    </div>
  )
}

FeatureCard1.defaultProps = {
  title1: 'Name',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=400',
  image_alt: 'image',
  title: 'role',
  rootClassName: '',
}

FeatureCard1.propTypes = {
  title1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard1
