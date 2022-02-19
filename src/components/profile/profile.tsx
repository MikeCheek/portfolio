import React from 'react'
import PhotoProfile from '../../atoms/photoProfile/photoProfile'

import cv from '../../assets/cv.pdf'

import * as styles from './profile.module.scss'
import { useThemeContext } from '../../utilities/themeContext'

const Profile = (): JSX.Element => {

    const theme = useThemeContext();

    return (
        <div className={styles.profile}>
            <PhotoProfile />
            <a
                rel="noopener noreferrer"
                href={cv}
                target="_blank"
                title="Download my CV"
                download="CV Michele Pulvirenti"
                className={`${styles.cvButton} ${theme === "dark" ? null : styles.light}`}
            >
                Download CV
            </a>
        </div>
    )
}

export default Profile
