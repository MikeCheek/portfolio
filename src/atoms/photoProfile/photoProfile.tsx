import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'

import * as styles from './photoProfile.module.scss'

const PhotoProfile = (): JSX.Element => {
  return (
    <div id="profile" className={styles.profile}>
      <StaticImage
        src={'../../images/newProfescional.png'}
        alt="Michele Pulvirenti"
        placeholder="tracedSVG"
        layout="constrained"
        style={{zIndex: 1}} //for safari
        tracedSVGOptions={{color: 'dimGrey'}}
        quality={80}
        width={200}
        height={200}
        className={styles.profescional}
      />
    </div>
  )
}

export default PhotoProfile
