import React from 'react'
import PhotoProfile from '../../atoms/photoProfile/photoProfile'

import cv from '../../assets/cv.pdf'

import * as styles from './profile.module.scss'

const Profile = (): JSX.Element => {
    return (
        <div className={styles.profile}>
            <PhotoProfile/>
            <a 
                rel="noopener noreferrer" 
                href={cv} 
                target="_blank" 
                download="CV Michele Pulvirenti"
                className={styles.cvButton}
            >
                Download CV
            </a>
        </div>
    )
}

export default Profile
