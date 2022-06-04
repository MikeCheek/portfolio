import React from 'react'
import cv from '../assets/cv.pdf'

const CV = () => {
  return (
    <iframe
      style={{position: 'absolute', top: 0, left: 0, right: 0}}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Michele pulvirenti Curriculum Vitae"
      name="Michele pulvirenti Curriculum Vitae"
      src={cv}
    ></iframe>
  )
}

export default CV
