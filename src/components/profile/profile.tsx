import React from 'react'
import PhotoProfile from '../../atoms/photoProfile/photoProfile'

//import CV from '../../assets/CV.pdf'

//import * as styles from './profile.module.scss'

const Profile = (): JSX.Element => {
    return (
        <div /*className={styles.profile}*/>
            <PhotoProfile/>
            {/*<CV rel="noopener noreferrer" href={CV} target="_blank" />*/}
        </div>
    )
}

export default Profile
