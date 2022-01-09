import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './photoProfile.module.scss'

const PhotoProfile = (): JSX.Element => {
    return (
        <div>
            <StaticImage 
                src="../../images/profescional.png"
                alt="Michele Pulvirenti"
                placeholder="blurred"
                layout="fixed"
                width={200}
                height={200}
                className={styles.profescional}
            />
        </div>
    )
}

export default PhotoProfile